const app = require("./app");
const http = require("http");
const https = require("http");
const config = require("./utils/config");
const fs = require("fs");
let server;

if (process.env.NODE_ENV == "prod") {
  const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  };
  server = https.createServer(options, app);
}
if (process.env.NODE_ENV == "dev") {
  server = http.createServer(app);
}

server.listen(config.PORT, () => {
  console.log(`running on port ${config.PORT}`);
});
