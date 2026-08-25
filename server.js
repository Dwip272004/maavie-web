/**
 * Custom server for cPanel's "Setup Node.js App" (Phusion Passenger).
 * Passenger runs this file directly with `node server.js` and sets PORT
 * itself — it does not use `next start`.
 */
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Maavie server listening on port ${port} (${dev ? "development" : "production"})`);
  });
});
