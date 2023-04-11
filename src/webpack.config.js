const path = require('path');

module.exports = {
  entry: {
    app: './/src/app/index.html',
    polyfills: './src/polyfills.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: 'libreria.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-react'
            ]
          }
        }
      }
    ],
  },
}