const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "example", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: [path.resolve(__dirname, "dist")],
    open: true,
    port: 3000,
    host: "0.0.0.0",
    useLocalIp: true,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "example"),
        ],
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
                "@emotion/babel-preset-css-prop",
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|mp4)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
