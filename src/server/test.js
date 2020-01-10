const express = require("express");

const server = express();

const httpServer = server.listen(8080, () => {
  console.log("started");
});
process.on("SIGINT", () => {
  httpServer.close(() => {
    setTimeout(() => {
      console.log("process exited");
      process.exit();
    }, 5000);
    console.log("timeout setted");
  });
  console.log("server closed");
});
