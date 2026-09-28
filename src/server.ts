import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

// Workers Static Assets ignore the Range header (always 200 + full body). Safari/iOS will not
// play a <video> without 206 responses, so video paths run through this Worker first
// (wrangler.jsonc assets.run_worker_first) and are answered from the Cache API, whose
// match() slices Range requests into 206 responses. The cache key drops the query string so
// "?v=1" cannot create parallel entries (cache poisoning), and only 200 origin responses are
// cached. The key carries the asset ETag: files re-encoded in place under the same name
// (the Animate clips) get a new key on the next deploy instead of a day of stale bytes.
const VIDEO = /^\/(?:media\/video|animate\/videos)\/[^/]+\.mp4$/;
// Every path run_worker_first sends here. Non-MP4 files under these prefixes (the hero
// poster sits next to the hero video) go straight back to Static Assets, never to the SSR
// handler.
const WORKER_FIRST = /^\/(?:media\/video|animate\/videos)\//;

// "cloudflare:workers" only exists in workerd. TanStack Start also loads this entry in the
// Node dev server (vite dev), where a top-level import would fail every SSR request, so the
// binding is loaded lazily and only on the video paths. In vite dev those paths never reach
// here: Vite's static middleware answers them from public/ first.
async function assets() {
  return (await import("cloudflare:workers")).env.ASSETS;
}

// Fallback when the Cache API throws or does not store anything (a hostname without a zone
// cache, for instance): answer a single "bytes=a-b", "bytes=a-" or "bytes=-n" range by hand,
// so Safari still gets a 206 instead of a 200 that ignores Range. Buffers the file (<= 12 MB,
// enforced by check-assets), which is why it is only the fallback.
async function sliceRange(request: Request, full: Response): Promise<Response> {
  const headers = new Headers(full.headers);
  headers.set("Accept-Ranges", "bytes");
  const match = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("Range")?.trim() ?? "");
  if (full.status !== 200 || !match || (match[1] === "" && match[2] === "")) {
    return new Response(full.body, { status: full.status, headers });
  }
  const body = await full.arrayBuffer();
  const size = body.byteLength;
  const start = match[1] === "" ? Math.max(0, size - Number(match[2])) : Number(match[1]);
  const end = match[1] === "" || match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
  if (start > end || start >= size) {
    headers.delete("Content-Length");
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(body.slice(start, end + 1), { status: 206, headers });
}

async function serveVideo(request: Request): Promise<Response> {
  const ASSETS = await assets();
  const url = new URL(request.url);
  const asset = url.origin + url.pathname;
  const origin = () => ASSETS.fetch(new Request(asset, { method: "GET" }));
  const head = await ASSETS.fetch(new Request(asset, { method: "HEAD" }));
  if (head.status !== 200) return origin();
  const cacheUrl = `${asset}?etag=${encodeURIComponent(head.headers.get("ETag") ?? "")}`;
  const key = new Request(cacheUrl, { method: "GET" });
  // Same URL as the key, but keeps the incoming headers (Range) so match() can answer 206.
  const lookup = new Request(cacheUrl, { method: "GET", headers: request.headers });
  try {
    const cache = (caches as unknown as { default: Cache }).default;
    const hit = await cache.match(lookup);
    if (hit) return hit;
    const full = await origin();
    if (full.status !== 200) return full;
    const res = new Response(full.body, full);
    res.headers.set("Accept-Ranges", "bytes");
    // Assets default to "max-age=0, must-revalidate", which the Cache API would treat as stale.
    res.headers.set("Cache-Control", "public, max-age=86400");
    // Store the only copy: a clone() would tee the body and buffer the whole file in the
    // isolate while nothing reads the other branch. The response is then read back through
    // match(), which answers Range with 206.
    await cache.put(key, res);
    const stored = await cache.match(lookup);
    if (stored) return stored;
  } catch {
    // Cache API unavailable or failing: fall through to the hand-made Range answer.
  }
  return sliceRange(request, await origin());
}

export default createServerEntry({
  async fetch(request) {
    const { pathname } = new URL(request.url);
    if (VIDEO.test(pathname)) {
      if (request.method === "GET") return serveVideo(request);
      return (await assets()).fetch(request);
    }
    if (WORKER_FIRST.test(pathname)) return (await assets()).fetch(request);
    return handler.fetch(request);
  },
});
