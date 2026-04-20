import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..", "out");
const port = Number(process.env.PORT || 3000);

if (!fs.existsSync(rootDir)) {
  console.error("Missing static export output directory: out");
  console.error('Run "yarn build" first.');
  process.exit(1);
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const send = (res, statusCode, body, contentType = "text/plain; charset=utf-8") => {
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-cache",
  });
  res.end(body);
};

const resolvePath = (urlPath) => {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = cleanPath === "/" ? "/index.html" : cleanPath;

  const candidates = [
    path.join(rootDir, normalized),
    path.join(rootDir, normalized, "index.html"),
    path.join(rootDir, `${normalized}.html`),
  ];

  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (!resolved.startsWith(rootDir)) continue;

    if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
      return resolved;
    }
  }

  return null;
};

const server = http.createServer((req, res) => {
  if (!req.url) {
    send(res, 400, "Bad Request");
    return;
  }

  const filePath = resolvePath(req.url);
  if (!filePath) {
    send(res, 404, "Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": "no-cache",
  });

  fs.createReadStream(filePath)
    .on("error", () => send(res, 500, "Internal Server Error"))
    .pipe(res);
});

server.listen(port, () => {
  console.log(`Serving exported app from ${rootDir}`);
  console.log(`URL: http://localhost:${port}`);
});
