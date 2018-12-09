const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(withCSS());
//https://github.com/zeit/next-plugins/issues/7
