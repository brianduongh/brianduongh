module.exports = {
    module: {
        rules: [
          {
            test: /\.(t|j)sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
}