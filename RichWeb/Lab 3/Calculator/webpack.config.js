module.exports = {
 entry: ["./calculator.js"],
 output: {
   filename: "./app.bundle.js"
 },
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};