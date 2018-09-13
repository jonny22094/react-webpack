const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/bootstrap.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "/build")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
}