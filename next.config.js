const isProduction = 'production' === process.env.NODE_ENV

module.exports = {
  basePath: isProduction ? '/analyse-flux-insertion' : '',
  assetPrefix: isProduction ? '/analyse-flux-insertion' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      ...defaultPathMap,
      '/cnaf': { page: '/lecteur/cnaf' },
      '/cnaf/instruction': { page: '/lecteur/cnaf/instruction' },
      '/cnaf/beneficiaire': { page: '/lecteur/cnaf/beneficiaire' },
      '/pole-emploi': { page: '/lecteur/pole-emploi' },
    }
  }
}
