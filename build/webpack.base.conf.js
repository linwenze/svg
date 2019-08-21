'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

var WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');
var dir = 'src/iconfont'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  plugins: [
    new WebpackIconfontPluginNodejs({
      fontName: 'my-icons',
      cssPrefix: 'ico',
      svgs: path.join(dir, 'svgs/*.svg'),
      // template: path.join(dir, 'css.njk'),
      fontsOutput: path.join(dir, 'fonts/'),
      cssOutput: path.join(dir, 'fonts/font.css'),
      htmlOutput: path.join(dir, 'fonts/_font-preview.html'),
      jsOutput: path.join(dir, 'fonts/fonts.js'),
      // formats: ['ttf', 'woff', 'svg'],
    }),
],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      // {
      //   test: /base.css$|index.css$/,
      //   loader: 'postcss-loader'
      //   // use: [
      //   //   { loader: 'postcss-loader', options: {
      //   //     ident: 'postcss',
      //   //     plugins: () => [
      //   //       require('autoprefixer'),
      //   //        require('postcss-pxtorem')({
      //   //         rootValue: 200,
      //   //          propWhiteList: [],
      //   //       }),
              
      //   //     ]
      //   //   } }
      //   // ],
      // },
       
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
