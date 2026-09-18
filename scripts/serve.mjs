import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const port = Number(process.env.PORT || 4173);
const root = process.cwd();
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml' };

createServer(async (req,res) => {
  try {
    const pathname = new URL(req.url || '/', 'http://localhost').pathname;
    const rel = pathname === '/' ? 'index.html' : pathname.replace(/^\//,'');
    const full = normalize(join(root, rel));
    if (!full.startsWith(root)) throw new Error('Invalid path');
    const body = await readFile(full);
    res.writeHead(200, { 'content-type': types[extname(full)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type':'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}).listen(port, () => console.log(`NBO preview: http://localhost:${port}`));
