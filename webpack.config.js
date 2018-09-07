const webpackMerge = require("webpack-merge")
const commonConfig = require("./webpack.common")

module.exports = (env) => {
  if (env.destination === 'demo') {
    const envConfig = require(`./webpack.${env.destination}`)
    return webpackMerge({mode: env.mode}, commonConfig, envConfig)
  }
  const envConfig = require(`./webpack.${env.mode}`)
  return webpackMerge({mode: env.mode}, commonConfig, envConfig)
}
