const isProduction = 'production' === process.env.NODE_ENV

module.exports = {
  basePath: isProduction ? '/analyse-flux-insertion' : '',
  assetPrefix: isProduction ? '/analyse-flux-insertion' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/cnaf': { page: '/cnaf' },
      '/cnaf/instruction': { page: '/cnaf/instruction' },
      '/cnaf/beneficiaire': { page: '/cnaf/beneficiaire' },
      '/pole-emploi': { page: '/pole-emploi' },
    }
  }
}
