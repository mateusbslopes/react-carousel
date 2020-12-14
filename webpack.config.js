const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "example", "App.js"),
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: [/node_modules/],
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "example", "index.html")
    })
  ]
};
