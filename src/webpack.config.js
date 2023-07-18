//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\src\webpack.config.js

const path = require( "path" )

module.exports = {
  entry: path.join( __dirname, "./index.js" ),
  output: {
    path: path.join( __dirname, "../server/public" ),
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx", ".css", ".json" ],
    fallback: {
      stream: require.resolve( "stream-browserify" ),
      zlib: require.resolve( "browserify-zlib" ),
      querystring: require.resolve( "querystring-es3" ),
      http: require.resolve( "stream-http" ),
      crypto: require.resolve( "crypto-browserify" ),
      assert: require.resolve( "assert/" ),
      url: require.resolve( "url/" ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ],
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  devtool: "source-map",
}
