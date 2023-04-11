const {
  plugin
} = require("mongoose");
const presets = [["@babel/env", {
  targets: {
    edge: "17",
    firefox: "60",
    chrome: "67",
    safari: "11.1"
  },
  useBuiltIns: "usage",
  corejs: "3.6.4"
}]];
module.exports = {
  presets: [['@babel/preset-env', {
    targets: {
      node: 'current'
    }
  }], '@babel/preset-react'],
  plugins: ['@babel/plugin-transform-runtime']
};