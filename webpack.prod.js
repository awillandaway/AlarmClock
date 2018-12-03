const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      } 
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
})