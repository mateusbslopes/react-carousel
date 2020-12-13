module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /example/],
        use: ["babel-loader"]
      }
    ]
  }
};
