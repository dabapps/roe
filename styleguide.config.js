/* global __dirname */
/* eslint-disable @typescript-eslint/no-var-requires */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

const introduction = [
  {
    name: 'About',
    content: 'docs/introduction/about.md',
  },
  {
    name: 'Development status',
    content: 'docs/introduction/development-status.md',
  },
  {
    name: 'Installation',
    content: 'docs/introduction/installation.md',
  },
  {
    name: 'Getting started',
    content: 'docs/introduction/getting-started.md',
  },
  {
    name: 'Contributing',
    content: 'docs/introduction/contributing.md',
  },
];

const components = [
  {
    name: 'App',
    components: 'src/ts/components/app/**/*.tsx',
  },
  {
    name: 'Navigation',
    components: 'src/ts/components/navigation/**/*.tsx',
  },
  {
    name: 'Content',
    components: 'src/ts/components/content/**/*.tsx',
  },
  {
    name: 'Grid',
    components: 'src/ts/components/grid/**/*.tsx',
  },
  {
    name: 'Tabs',
    components: 'src/ts/components/tabs/**/*.tsx',
  },
  {
    name: 'Tables',
    components: 'src/ts/components/tables/**/*.tsx',
  },
  {
    name: 'Modals',
    components: 'src/ts/components/modals/**/*.tsx',
  },
  {
    name: 'Forms',
    components: 'src/ts/components/forms/**/*.tsx',
  },
  {
    name: 'Prototyping',
    components: 'src/ts/components/prototyping/**/*.tsx',
  },
  {
    name: 'Banners',
    components: 'src/ts/components/banners/**/*.tsx',
  },
  {
    name: 'Pagination',
    components: 'src/ts/components/pagination/**/*.tsx',
  },
  {
    name: 'Misc',
    components: 'src/ts/components/misc/**/*.tsx',
  },
  {
    name: 'Precomposed',
    components: 'src/ts/components/precomposed/*.tsx',
  },
];

const less = [
  {
    name: 'Atomic float classes',
    content: 'src/less/float.examples.md',
  },
  {
    name: 'Atomic padding & margin classes',
    content: 'src/less/padding-and-margin.examples.md',
  },
  {
    name: 'Atomic display classes',
    content: 'src/less/display.examples.md',
  },
  {
    name: 'Atomic position classes',
    content: 'src/less/position.examples.md',
  },
  {
    name: 'Atomic text classes',
    content: 'src/less/text.examples.md',
  },
  {
    name: 'Atomic text align classes',
    content: 'src/less/text-align.examples.md',
  },
  {
    name: 'Variables',
    content: 'src/less/variables.examples.md',
  },
];

function getExampleFilename(componentPath) {
  return componentPath.replace(/\.tsx?$/, '.examples.md');
}

function updateExample(props, exampleFilePath) {
  const { settings, lang } = props;

  if (settings && typeof settings.file === 'string') {
    const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);

    if (lang === 'less') {
      settings.static = true;
    }

    delete settings.file;

    return {
      content: fs.readFileSync(filepath, 'utf8'),
      settings: settings,
      lang: lang,
    };
  }

  return props;
}

const webpackConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.(?:less|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')],
              // lessOptions: {
              //   strictMath: true,
              // },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, 'tsconfig.docs.json'),
      },
    }),
  ],
};

const reactDocGenTypescriptConfig = {
  propFilter: function(prop /*, component*/) {
    if (
      prop.description &&
      (!prop.parent || !prop.parent.fileName.endsWith('react/index.d.ts'))
    ) {
      return true;
    }

    return false;
  },
};

module.exports = {
  require: [path.join(__dirname, 'docs/less/index.less')],
  title: "Roe - DabApps' Project Development Kit",
  components: 'src/ts/components/**/*.{ts,tsx}',
  moduleAliases: {
    '@dabapps/roe': path.resolve(__dirname, 'src/ts/index.ts'),
  },
  ignore: [],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    reactDocGenTypescriptConfig
  ).parse,
  webpackConfig: webpackConfig,
  getExampleFilename: getExampleFilename,
  updateExample: updateExample,
  assetsDir: path.join(__dirname, 'docs/static/'),
  template: {
    favicon: 'images/roe-favicon.png',
  },
  styleguideComponents: {
    Logo: path.join(__dirname, 'docs/components/logo'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction/description.md',
      sections: introduction,
    },
    {
      name: 'Components',
      sections: components,
    },
    {
      name: 'Less',
      sections: less,
    },
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
        overflow: 'auto',
      },
    },
    Pre: {
      pre: {
        overflow: 'auto',
      },
    },
    Code: {
      code: {
        border: 'none',
        margin: 0,
        padding: 0,
      },
    },
    Type: {
      type: {
        whiteSpace: 'normal',
      },
    },
  },
  theme: {
    color: {
      linkHover: '#EF592B',
    },
  },
};
