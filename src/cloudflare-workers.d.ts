// Minimal typing for the Workers runtime module (avoids pulling @cloudflare/workers-types).
declare module "cloudflare:workers" {
  export const env: { ASSETS: { fetch(request: Request): Promise<Response> } };
}
