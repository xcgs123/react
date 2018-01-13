var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/index.js",//已多次提及的唯一入口文件
  
  output: {
    path: path.resolve(__dirname, 'build'),//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader",
              },
              exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use:[
              {
                loader:"style-loader"
              },
              {
                loader:"css-loader",
                options:{
                  module: true
                }
              }]
          },
          {
            test: /\.less$/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
              limit: 10000,
            }
          }
      ]
  },

  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },

  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
        template: __dirname + "/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}