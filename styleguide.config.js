const fs = require('fs');
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
    name: 'Modals',
    components: 'src/ts/components/modals/**/*.tsx'
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
  },
  {
    name: 'Atomic float classes',
    content: 'src/less/float.examples.md'
  },
  {
    name: 'Atomic padding & margin classes',
    content: 'src/less/padding-and-margin.examples.md'
  },
  {
    name: 'Atomic position classes',
    content: 'src/less/position.examples.md'
  },
  {
    name: 'Atomic text classes',
    content: 'src/less/text.examples.md'
  },
  {
    name: 'Atomic text align classes',
    content: 'src/less/text-align.examples.md'
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

function updateExample (props, exampleFilePath) {
  const { settings, lang } = props;

  if (typeof settings.file === 'string') {
    const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);

    if (lang === 'less') {
      settings.static = true;
    }

    delete settings.file;

    return {
      content: fs.readFileSync(filepath, 'utf8'),
      settings,
      lang,
    }
  }

  return props;
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

// const sourceMapLoader = webpackConfig.module.rules[1].loader;

// const babelLoader = {
//   test: /\.js$/,
//   use: {
//     loader: 'babel-loader',
//     options: {
//       presets: ['es2015'],
//       plugins: []
//     }
//   }
// };

// webpackConfig.module.rules[1] = babelLoader;
webpackConfig.module.rules[2].oneOf[2] = lessLoader;

console.log(webpackConfig.module);

module.exports = {
  require: [
    path.join(__dirname, 'docs/less/index.less'),
  ],
  title: 'Roe - DabApps\' Project Development Kit',
  components: 'src/ts/components/**/*.{ts,tsx}',
  ignore: [],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig,
  getExampleFilename,
  updateExample,
  assetsDir: path.join(__dirname, 'docs/static/'),
  template: path.join(__dirname, 'docs/templates/index.html'),
  styleguideComponents: {
    Logo: path.join(__dirname, 'docs/components/logo'),
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
  ]),
  styles: {
    /*
    Component: {
      class: {
        property: 'value'
      }
    },
    */
    Markdown: {
      pre: {
        overflow: 'auto'
      }
    },
    Code: {
      code: {
        border: 'none',
        display: 'block',
        margin: 0,
        padding: 0
      }
    },
    Type: {
      type: {
        whiteSpace: 'normal'
      }
    }
  },
  theme: {
    color: {
      linkHover: '#EF592B'
    }
  }
};
