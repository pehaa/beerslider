const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'demo'),
    library: '[name]',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins : [
    new HTMLWebpackPlugin({
      filename: path.resolve(__dirname, 'demo', 'index.html'),
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
      title: 'BeerSlider'
    }),
    new MiniCssExtractPlugin()
  ]
}