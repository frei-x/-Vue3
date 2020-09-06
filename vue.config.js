module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: './',
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.PROXY_TARGET,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
