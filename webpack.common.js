module.exports = {
  entry: {
    BeerSlider: './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: '[name]',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env"] }
        }
      }
    ]
  }
}
