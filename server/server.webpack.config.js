const path = require('path');
const env = require('@babel/preset-env');
const reactApp = require('babel-preset-react-app');
const webpack = require('webpack');
// Webpack build configuration to build the SSR bundle.
// Invoked by build:server.

module.exports = {
  name: 'server-config',
  mode: 'production',
  entry: path.resolve(__dirname, './server.tsx'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.bundle.js',
    libraryTarget: 'this',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'handlebars.runtime': 'handlebars/dist/handlebars.runtime.js',
    },
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [env, reactApp],
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [env, reactApp],
          },
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' },
      },
      {
        // anything not JS or HTML, we load as a URL
        // this makes static image imports work with SSR
        test: /\.(?!js|mjs|jsx|ts|tsx|html|graphql$)[^.]+$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        // anything in node_modules that isn't js,
        // we load as null - e.g. imported css from a module,
        // that is not needed for SSR
        test: /\.(?!js|mjs|jsx|ts|tsx|html|graphql$)[^.]+$/,
        include: /node_modules/,
        use: {
          loader: 'null-loader',
        },
      },
    ],
  },
  plugins: [
    // prevents the following warning during build:
    // > WARNING in ./node_modules/encoding/lib/iconv-loader.js
    // > Critical dependency: the request of a dependency is an expression
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, () => {}),
    
  ],
};
