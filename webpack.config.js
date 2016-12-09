const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
  	'./src/app'
  ],

  devtool: 'eval-source-map',
  output: {
  	path: __dirname,
  	filename: 'app.js',
  	publicPath: '/js/'
  },

  module: {
  	loaders: [
  		{
  			test: [/\.js$/, /\.jsx$/],
  			loaders: ['babel'],
  			include: path.join(__dirname, 'src'),
  		},
  		{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]',
        },
      },
  	]
  }
};
