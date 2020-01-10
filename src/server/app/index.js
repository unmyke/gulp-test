import express from "express";
import { identity } from "@common";

const App = ({
  config: {
    api: { protocol = "http", host = "localhost", port = "", uri = "api" }
  },
  error
}) => {
  const server = express();

  let started = false;
  let inited = false;

  const init = () => {
    if (!inited) {
      server.get(uri, (_, res) => {
        res.json(identity({ test: "test", res: "result" }));
      });
      server.get("/error", (_, res) => {
        res.send(error());
      });
      inited = true;
    }
  };

  const start = () => {
    if (!started)
      server.listen(port, host, () => {
        if (!inited) init();
        console.log(
          `Server started at ${protocol}://${host}${port ? `:${port}` : ""}`
        );
        started = true;
      });
  };

  const stop = () => {
    if (started)
      server.close(() => {
        started = false;
      });
  };

  return Object.freeze({
    init,
    start,
    stop
  });
};

export default App;
