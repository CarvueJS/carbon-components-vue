const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.plugins.push(
    new StylelintPlugin({
      files: ['**/*.vue']
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    }),
  );

  storybookBaseConfig.module.rules.push(
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve('packages')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [ path.resolve('stories'), path.resolve('components'), path.resolve('dist')]
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
      include: [
        path.resolve('stories'),
        path.resolve('components'),
        path.resolve('node_modules/carbon-components/css/carbon-components.css'),
        path.resolve('dist'),
      ]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      include: path.resolve(__dirname, '../'),
      options: {
        objectAssign: 'Object.assign'
      }
    });
  return storybookBaseConfig;
};
