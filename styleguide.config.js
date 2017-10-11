module.exports = {
  title: 'Roe',
  components: 'src/ts/components/**/*.{ts,tsx}',
  ignore: [],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  sections: [
    {
      name: 'Grid',
      components: '**/grid/**/*.tsx'
    },
    {
      name: 'Tabs',
      components: '**/tabs/**/*.tsx'
    }
  ]
};
