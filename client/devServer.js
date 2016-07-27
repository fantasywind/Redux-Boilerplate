import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import Debug from 'debug';
import path from 'path';

const debug = new Debug('Redux:Client');
const app = express();
const PORT = process.env.PORT || 5100;

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'app.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: "'http://api.starbucks.rytass.com'",
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'react-hot',
        'babel',
      ],
      exclude: /node_modules/,
      include: __dirname,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    }],
  }
};

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, (error) => {
  if (error) {
    debug(error);
  } else {
    debug('Redux Dev Site Listening on port %s', PORT);
  }
});
