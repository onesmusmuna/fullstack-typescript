const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const prod = {
  mode: "production",
  devtool: "source-map",
};

const config = merge(prod, common);

module.exports = config;
