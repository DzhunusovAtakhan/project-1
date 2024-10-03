const { watch } = require("fs");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./script.js",
  output: {
    path: __dirname + "/js",
    filename: "bundle.js",
  },
  watch: true,

  devtool: "source-map",
};
