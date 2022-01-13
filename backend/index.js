const app = require("./app");
const http = require("http");
const https = require("http");
const config = require("./utils/config");
let server;
process.env.NODE_ENV === "prod"
  ? (server = https.createServer(app))
  : (server = http.createServer(app));

server.listen(config.PORT, () => {
  console.log(`running on port ${config.PORT}`);
});
