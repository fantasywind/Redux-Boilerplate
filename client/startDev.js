import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import debug from 'debug';
import opn from 'opn';
// import proxy from 'http-proxy-middleware';

const debugServer = debug('Redux-Bolierplate:DevServer');

const PORT = process.env.DEV_PORT || process.env.PORT || 8300;
// const DEV_API_HOST = process.env.DEV_API_HOST || 'http://localhost:8200';
const app = express();

const webpackConfig = webpack({
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, 'entry.js'),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: `"${process.env.API_HOST || '/api'}"`,
      API_VERSION: `"${process.env.API_VERSION || '0.0.0'}"`,
    }),
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
      exclude: /node_modules/,
    }],
  },
});

app.use(webpackDevMiddleware(webpackConfig, {
  publicPath: '/',
  noInfo: true,
  compress: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}));
app.use(webpackHotMiddleware(webpackConfig));

// Proxy for API
// app.use('/api', proxy({
//   target: DEV_API_HOST,
//   changeOrigin: true,
//   pathRewrite: {
//     '^/api': '',
//   },
// }));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    debug(err);
  } else {
    debugServer(`Client Dev Server running on port: ${PORT}`);

    opn(`http://localhost:${PORT}`);
  }
});
