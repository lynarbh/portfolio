import handler, { createServerEntry } from "@tanstack/react-start/server-entry";
import { env } from "cloudflare:workers";

// Workers Static Assets ignore the Range header (always 200 + full body). Safari/iOS will not
// play a <video> without 206 responses, so video paths run through this Worker first
// (wrangler.jsonc assets.run_worker_first) and are answered from the Cache API, whose
// match() slices Range requests into 206 responses. The cache key drops the query string so
// "?v=1" cannot create parallel entries (cache poisoning), and only 200 origin responses are
// cached.
const VIDEO = /^\/(?:media\/video|animate\/videos)\/[^/]+\.mp4$/;
// Every path run_worker_first sends here. Non-MP4 files under these prefixes (the hero
// poster sits next to the hero video) go straight back to Static Assets, never to the SSR
// handler.
const WORKER_FIRST = /^\/(?:media\/video|animate\/videos)\//;

async function serveVideo(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const key = new Request(url.origin + url.pathname, { method: "GET" });
  // Same URL as the key, but keeps the incoming headers (Range) so match() can answer 206.
  const lookup = new Request(url.origin + url.pathname, {
    method: "GET",
    headers: request.headers,
  });
  const cache = (caches as unknown as { default: Cache }).default;
  const hit = await cache.match(lookup);
  if (hit) return hit;
  const full = await env.ASSETS.fetch(key);
  if (full.status !== 200) return full;
  const res = new Response(full.body, full);
  res.headers.set("Accept-Ranges", "bytes");
  // Assets default to "max-age=0, must-revalidate", which the Cache API would treat as stale.
  res.headers.set("Cache-Control", "public, max-age=86400");
  await cache.put(key, res.clone());
  return (await cache.match(lookup)) ?? res;
}

export default createServerEntry({
  fetch(request) {
    const { pathname } = new URL(request.url);
    if (VIDEO.test(pathname)) {
      if (request.method === "GET") return serveVideo(request);
      return env.ASSETS.fetch(request);
    }
    if (WORKER_FIRST.test(pathname)) return env.ASSETS.fetch(request);
    return handler.fetch(request);
  },
});
