const path = require('path');

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
    content: 'src/less/variables.examples.md'
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

function getExampleFilename (componentPath) {
  return componentPath.replace(/\.tsx?$/, '.examples.md');
}

function mergeWithArrays (objValue, srcValue, key, object, source, stack) {
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return objValue.concat(srcValue);
  }

  return;
}

const lessLoader = {
  test: /\.less$/,
  use: [
    'style-loader', // creates style nodes from JS strings
    'css-loader', // translates CSS into CommonJS
    'postcss-loader',
    {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        paths: [
            path.resolve(__dirname, 'node_modules')
        ]
      }
    }
  ]
};

const webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js');

webpackConfig.module.rules[2].oneOf[2] = lessLoader;

module.exports = {
  require: [
    path.join(__dirname, 'src/less/index.less'),
  ],
  title: 'Roe - DabApps\' Project Development Kit',
  components: 'src/ts/components/**/*.{ts,tsx}',
  ignore: [],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig,
  getExampleFilename,
  assetsDir: 'static',
  template: 'templates/index.html',
  sections: sortByName([
    {
      name: 'Components',
      sections: sortByName(components)
    },
    {
      name: 'Less',
      sections: sortByName(less)
    }
  ]),
  styles: {
    Markdown: { // Component
      pre: { // Class
        overflow: 'auto'
      }
    },
    Code: { // Component
      code: { // Class
        border: 'none'
      }
    }
  }
};
