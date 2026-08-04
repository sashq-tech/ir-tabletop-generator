import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.RR_QA_PORT || 4195);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

async function resolveRequest(requestPath) {
  const pathname = decodeURIComponent(requestPath.split("?")[0]);
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const candidates = path.extname(relative) ? [relative] : [relative, `${relative}.html`];

  for (const candidate of candidates) {
    const resolved = path.resolve(root, candidate);
    if (!resolved.startsWith(root + path.sep) && resolved !== root) {
      continue;
    }
    try {
      if ((await stat(resolved)).isFile()) {
        return resolved;
      }
    } catch {
      // Try the next static-file candidate.
    }
  }
  return null;
}

const server = http.createServer(async (request, response) => {
  const filePath = await resolveRequest(request.url || "/");
  if (!filePath) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  const body = await readFile(filePath);
  response.writeHead(200, {
    "cache-control": "no-store",
    "content-type": types[path.extname(filePath)] || "application/octet-stream"
  });
  response.end(body);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Response Rehearsal QA server: http://127.0.0.1:${port}/`);
});
