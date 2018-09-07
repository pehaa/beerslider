const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /[^((?!unmin))]\.css$/g,
    }),
    new UnminifiedWebpackPlugin({
        postfix: 'unmin'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}
