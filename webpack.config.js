const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    output: {
        filename: isDevelopment ? '[name].js' : '[name].[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
          })
    ],
    module: {
        rules: [
          {
            test: /\.(t|j)sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: !isDevelopment }
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
}