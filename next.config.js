const isProduction = 'production' === process.env.NODE_ENV

module.exports = {
  assetPrefix: isProduction ? '/demo-flux-cnaf' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  }
}
