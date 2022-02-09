const app = require("./app");
const http = require("http");
const config = require("./utils/config");
let server;

server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`running on port ${config.PORT}`);
});
