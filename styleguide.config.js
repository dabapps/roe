const components = [
  {
    name: 'Content',
    components: 'src/ts/components/content/**/*.tsx'
  },
  {
    name: 'Grid',
    components: 'src/ts/components/grid/**/*.tsx'
  },
  {
    name: 'Tabs',
    components: 'src/ts/components/tabs/**/*.tsx'
  },
  {
    name: 'Tables',
    components: 'src/ts/components/tables/**/*.tsx'
  },
  {
    name: 'Forms',
    components: 'src/ts/components/forms/**/*.tsx'
  },
  {
    name: 'Prototyping',
    components: 'src/ts/components/prototyping/**/*.tsx'
  },
  {
    name: 'Misc',
    components: 'src/ts/components/*.tsx'
  }
];

const less = [
  {
    name: 'Variables',
    content: 'src/less/variables.less'
  }
];

function sortByName (arr) {
  return arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  })
}

module.exports = {
  title: 'Roe',
  components: 'src/ts/components/**/*.{ts,tsx}',
  ignore: [],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  getExampleFilename: function (componentPath) {
    return componentPath.replace(/\.tsx?$/, '.examples.md');
  },
  sections: sortByName([
    {
      name: 'Components',
      sections: sortByName(components)
    },
    {
      name: 'Less',
      sections: sortByName(less)
    }
  ])
};
