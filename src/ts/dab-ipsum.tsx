import * as randomSeed from 'random-seed';
import * as React from 'react';

export interface IIpsumProps {
  type: 'li' | 'p' | 'text';
}

export interface IDabIpsumProps {
  type?: 'ul' | 'ol' | 'p' | 'text';
  count?: number;
}

const words = [
  'academia',
  'agile',
  'angular',
  'apprentice',
  'apps',
  'brighton',
  'business',
  'careers',
  'cats',
  'client',
  'community',
  'css',
  'dabapps',
  'design',
  'designers',
  'development',
  'developers',
  'digital',
  'django',
  'documentation',
  'education',
  'equality',
  'events',
  'framework',
  'innovation',
  'ionic',
  'ios',
  'java',
  'javascript',
  'kittens',
  'mobile',
  'native',
  'networking',
  'news',
  'objective-c',
  'open-source',
  'partnerships',
  'product',
  'projects',
  'prototyping',
  'python',
  'react',
  'react-native',
  'recognition',
  'rest',
  'service',
  'teaching',
  'technical',
  'testimonial',
  'testing',
  'toolkit',
  'training',
  'typescript',
  'web'
];

let rand = randomSeed.create('dabapps');

export const resetRandomSeed = () => {
  rand = randomSeed.create('dabapps');
}

export const generateIpsum = () => {
  const ipsum = Array.apply(null, new Array(15)).map(() => (
    words[Math.floor(rand.range(words.length))]
  )).join(' ');

  return ipsum.charAt(0).toUpperCase() + ipsum.substring(1) + '.';
}

export const Ipsum: React.SFC<IIpsumProps> = (props) => {
  const { type } = props;
  const ipsum = generateIpsum();

  switch (type) {
    case 'li':
      return (
        <li>
          {ipsum}
        </li>
      );
    case 'text':
      return (
        <span>
          {ipsum}
        </span>
      );
    // case 'p': NOTE: this is the default, so a case for it is not needed
    default:
      return (
        <p>
          {ipsum}
        </p>
      );
  }
};

export class DabIpsum extends React.Component<IDabIpsumProps, void> {
  public shouldComponentUpdate (prevProps: IDabIpsumProps) {
    return prevProps.type !== this.props.type ||
      prevProps.count !== this.props.count;
  }

  public render () {
    const {
      type = 'p',
      count = 5
    } = this.props;

    const component = type === 'p' ? type : 'li';

    const items = Array.apply(null, new Array(count)).map((v: void, index: number) => (
      <Ipsum key={index} type={component} />
    ));

    switch (type) {
      case 'ul':
        return (
          <ul>
            {items}
          </ul>
        );
      case 'ol':
        return (
          <ol>
            {items}
          </ol>
        );
      case 'text':
        return (
          <Ipsum type="text" />
        );
      // case 'p': NOTE: this is the default, so a case for it is not needed
      default:
        return (
          <div>
            {items}
          </div>
        );
    }
  }
}
