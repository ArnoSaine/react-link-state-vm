const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');
const { mode } = require('frontend-app/cjs/webpack/config/modes');
const config = require('frontend-app/cjs/webpack/config').default;

const publicPath = mode === 'build' ? '/react-link-state-vm/' : '/dist/';

module.exports = config.merge({
  output: { publicPath },
  devServer: {
    historyApiFallback: { index: publicPath }
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: 'root',
      inject: false,
      mobile: true,
      template,
      title: 'react-link-state-vm',
      links: [
        './styles/syntax.css',
        './styles/codemirror.css',
        './styles/react.css',
        './styles/index.css'
      ]
    }),
    new CopyWebpackPlugin([{ from: 'styles', to: 'styles' }])
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty'
  }
});
