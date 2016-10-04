import path from 'path';
import webpack from 'webpack';
import _debug from 'debug';

const debug = _debug('Redux-Bolierplate:Build');

debug('Start Build Source...');

webpack({
  devtool: false,
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'entry.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: `"${process.env.API_HOST || '/api'}"`,
      API_VERSION: `"${process.env.API_VERSION || '0.0.0'}"`,
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
      exclude: /node_modules/,
    }],
  },
}, (err) => {
  if (err) {
    debug(err);
  } else {
    debug('Build Successful!');
  }
});
