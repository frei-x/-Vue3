module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  //本地 link dev模式 排除 eslint 检测软连接
  chainWebpack: (config) => {
    config.module.rule('eslint').exclude.add(/vue-dust/).end();
  },
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: './',
};
