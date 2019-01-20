const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const glob = require('glob')

// Change this to get source maps while development.
const devtool = ''

function getFiles(filePattern) {
  const files = {
    'index.js': path.join(__dirname, 'src/index.js'),
  }
  glob.sync(filePattern).forEach((file) => {
    files[file.replace('src/components', '')] = path.join(__dirname, file)
  })
  console.log(files)
  return files
}

// Module entry point.
const entryPoint = getFiles('src/components/**/index.js')

// Output path and targets.
const output = {
  path: path.resolve(__dirname, 'lib'),
  filename: '[name]',
  libraryTarget: 'commonjs2',
  chunkFilename: 'commons'
}

// Exclude react, react-dom and styled-components from the bundle.
const externalModules = [
  'react',
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