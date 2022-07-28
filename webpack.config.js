const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: env.production,
    port: 10000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './webpack.html',
    }),
    new MiniCssExtractPlugin({
      filename: !env.production ? '[name].css' : '[name].[hash].css',
      chunkFilename: !env.production ? '[id].css' : '[id].[hash].css',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
