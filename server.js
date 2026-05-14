import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import handler from './dist/server/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer(async (req, res) => {
  try {
    const result = await handler.fetch(new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    }));

    res.writeHead(result.status, Object.fromEntries(result.headers));
    res.end(await result.text());
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
