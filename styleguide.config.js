module.exports = {
  components: 'src/ts/**/*.{ts,tsx}',
  ignore: ['**/ts/index.ts', '**/utils/**'],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  sections: [
    {
      name: 'Grid',
      components: './src/ts/components/grid/**/*.tsx'
    },
    {
      name: 'Misc',
      components: './src/ts/**/*.tsx'
    }
  ]
};
