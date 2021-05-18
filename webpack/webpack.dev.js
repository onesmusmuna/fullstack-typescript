const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
  mode: "development",
  devtool: "cheap-module-source-map",
};

const config = merge(dev, common);

module.exports = config;
