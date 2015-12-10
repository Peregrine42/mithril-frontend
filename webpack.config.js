module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
}