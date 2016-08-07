const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const metadata = require(debug ? './metadata.development' : './metadata.production') || {}

metadata.base = metadata.base || '/'

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: {
    'vendor': './vendor.js',
    'entry': './entry.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'entry.[hash].js',
    chunkFilename: '[hash].[id].chunk.js'
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'bower_components']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(web_modules|node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'stage-0'] } },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=assets/images/[hash].[ext]' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9\.=]+)?$/, loader: 'file?name=assets/fonts/[hash].[ext]' },
      { test: /\.html?$/, loader: 'html?minimize=true' }
    ]
  },
  plugins: (debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false })
  ]).concat([
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.[hash].js', minChunks: Infinity }),
    new HtmlWebpackPlugin({
      inject: false,
      template: '!!ejs!./src/index.html',
      metadata,
      debug
    }),
    new webpack.DefinePlugin({
      metadata: JSON.stringify(metadata)
    })
  ])
}
