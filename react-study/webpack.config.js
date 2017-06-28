/*
* @Author: Administrator
* @Date:   2017-02-03 23:28:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-03 23:48:01
*/

var path = require('path');
module.exports = {
  entry:[
    './src/index.js'
  ],
  output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015','react']
          }
        }]
    },
    devServer:{
        contentBase:'./build'
    }
}