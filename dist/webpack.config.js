const path = require('path');
module.exports = {
  entry: {
    app: './src/index.js',
    polyfills: './src/polyfills.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: 'libreria.bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              node: 'current'
            }
          }], '@babel/preset-react']
        }
      }
    }]
  }
};