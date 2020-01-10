const { cleanServer, cleanCommon, cleanClient, clean } = require("./clean");
const {
  transpileServer,
  transpileCommon,
  transpile,
  transpileDevServer,
  transpileDevCommon,
  transpileDev
} = require("./transpile");
const {
  bundleServer,
  bundleClient,
  bundle,
  bundleDevServer,
  bundleDevClient,
  bundleDev
} = require("./bundle");
const { devServer, devTest, devConsole, devClient, dev } = require("./dev");
const start = require("./start");

module.exports = {
  cleanServer,
  cleanCommon,
  cleanClient,
  clean,
  transpileServer,
  transpileCommon,
  transpile,
  transpileDevServer,
  transpileDevCommon,
  transpileDev,
  bundleServer,
  bundleClient,
  bundle,
  bundleDevServer,
  bundleDevClient,
  bundleDev,
  devServer,
  devTest,
  devConsole,
  devClient,
  dev,
  start
};
