const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

const IMAGES_PATH = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(__dirname, "example", "App.js"),
  output: {
    publicPath: IMAGES_PATH,
  },
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
      template: path.resolve(__dirname, "dist", "index.html")
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "example", "images"),
          to: path.resolve(__dirname, "dist", "images"),  },
      ],
    }),
  ]
};
