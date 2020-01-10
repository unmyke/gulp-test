const {
  targets: { SERVER, CLIENT, COMMON, CONSOLE }
} = require("./types");

const indexFileName = "index.js";

module.exports = {
  [SERVER]: indexFileName,
  [CONSOLE]: "interfaces/console",
  test: "test",
  [COMMON]: indexFileName,
  [CLIENT]: indexFileName
};
