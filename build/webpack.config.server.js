const path = require('path');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
console.log(Object.keys(require('../package.json').dependencies))
module.exports = webpackMerge(baseConfig, {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2'
    }
})