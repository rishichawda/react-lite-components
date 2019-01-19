const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

// Change this to get source maps while development.
const devtool = ''

// Module entry point.
const entryPoint = './src/index.js'

// Output path and targets.
const output = {
  path: path.resolve('lib'),
  filename: 'index.js',
  libraryTarget: 'commonjs2',
}

// Exclude react, react-dom and styled-components from the bundle.
const externalModules = [
  'react',
  'react-dom',
  'styled-components'
]

// Configure status logs while build.
const statsConfig = {    
  colors: true,
  hash: true,
  timings: true,
  assets: true,
  chunks: true,
  chunkModules: true,
  modules: true,
  children: true,
}

// Splitchunks configuration.
const splitChunks = {
  cacheGroups: {
    default: false,
    styles: {
      name: 'styles',
      test: /\.css$/,
      chunks: 'all',
      enforce: true,
    },
    commons: {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendor_app',
      chunks: 'all',
      minChunks: 2,
    },
  },
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader',
      },
    ],
  },
  devtool,
  mode: 'production',
  entry: entryPoint,
  output,
  externals: externalModules,
  stats: statsConfig,
  optimization: {
    splitChunks,
    runtimeChunk: false,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
          },
        },
      }),
    ],
  }
}