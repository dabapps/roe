/* global __dirname */
'use strict';

var fs = require('fs');
var path = require('path');

var components = [
  {
    name: 'App',
    components: 'src/ts/components/app/**/*.tsx'
  },
  {
    name:'Navigation',
    components: 'src/ts/components/navigation/**/*.tsx'
  },
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
    name: 'Banners',
    components: 'src/ts/components/banners/**/*.tsx'
  },
  {
    name: 'Highlight',
    components: 'src/ts/components/highlight/**/*.tsx'
  },
  {
    name: 'Misc',
    components: 'src/ts/components/*.tsx'
  },
  {
    name: 'Precomposed',
    components: 'src/ts/components/precomposed/*.tsx'
  },
];

var less = [
  {
    name: 'Atomic float classes',
    content: 'src/less/float.examples.md'
  },
  {
    name: 'Atomic padding & margin classes',
    content: 'src/less/padding-and-margin.examples.md'
  },
  {
    name: 'Atomic display classes',
    content: 'src/less/display.examples.md'
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
  },
  {
    name: 'Variables',
    content: 'src/less/variables.examples.md'
  }
];

function getExampleFilename (componentPath) {
  return componentPath.replace(/\.tsx?$/, '.examples.md');
}

function updateExample (props, exampleFilePath) {
  var settings = props.settings;
  var lang = props.lang;

  if (typeof settings.file === 'string') {
    var filepath = path.resolve(path.dirname(exampleFilePath), settings.file);

    if (lang === 'less') {
      settings.static = true;
    }

    delete settings.file;

    return {
      content: fs.readFileSync(filepath, 'utf8'),
      settings: settings,
      lang: lang
    };
  }

  return props;
}

var lessLoader = {
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

var webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js');

webpackConfig.module.rules[2].oneOf[2] = lessLoader;

var reactDocGenTypescriptConfig = {
  propFilter: {
    skipPropsWithoutDoc: true
  }
};

module.exports = {
  require: [
    path.join(__dirname, 'docs/less/index.less'),
  ],
  title: 'Roe - DabApps\' Project Development Kit',
  components: 'src/ts/components/**/*.{ts,tsx}',
  ignore: [],
  propsParser: require('react-docgen-typescript')
    .withCustomConfig('./tsconfig.json', reactDocGenTypescriptConfig).parse,
  webpackConfig: webpackConfig,
  getExampleFilename: getExampleFilename,
  updateExample: updateExample,
  assetsDir: path.join(__dirname, 'docs/static/'),
  template: path.join(__dirname, 'docs/templates/index.html'),
  styleguideComponents: {
    Logo: path.join(__dirname, 'docs/components/logo'),
  },
  sections: [
    {
      name: 'Components',
      sections: components
    },
    {
      name: 'Less',
      sections: less
    }
  ],
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
