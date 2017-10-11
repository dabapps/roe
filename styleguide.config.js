module.exports = {
  title: 'Roe',
  components: 'src/ts/components/**/*.{ts,tsx}',
  ignore: [],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  sections: [
    {
      name: 'Grid',
      components: 'src/ts/components/grid/**/*.tsx'
    },
    {
      name: 'Tabs',
      components: 'src/ts/components/tabs/**/*.tsx'
    },
    {
      name: 'Forms',
      components: 'src/ts/components/forms/**/*.tsx'
    },
    {
      name: 'Misc',
      components: 'src/ts/components/*.tsx'
    }
  ]
};
