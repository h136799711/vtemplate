// vue.config.js
// 20210707 参考 https://cli.vuejs.org/config/#vue-config-js

process.env.VUE_APP_VERSION = require('./package.json').version;

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8082
    },
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: process.env.NODE_ENV !== 'production',
    // Setting this to false can speed up production builds if you don't need source maps for production.
    productionSourceMap: true,
    crossorigin: 'anonymous',
    integrity: true,
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {

        } else {
        }
    }
    // options...
}
