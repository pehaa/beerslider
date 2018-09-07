module.exports = {
  output: {
    library: 'BeerSlider',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /(node_modules|tests)/
      },
      {
        test: /\.scss$/,
        use: [
         "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}