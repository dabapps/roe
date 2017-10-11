module.exports = {
  components: 'src/ts/**/*.{ts,tsx}',
  ignore: ['**/ts/index.ts', '**/utils/**'],
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
};
