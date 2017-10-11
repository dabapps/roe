import * as randomSeed from 'random-seed';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface IpsumProps {
  component: 'li' | 'p' | 'text';
}

export interface DabIpsumProps {
  component?: 'ul' | 'ol' | 'p' | 'text';
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
  'coffee',
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
  'green',
  'innovation',
  'ionic',
  'ios',
  'java',
  'javascript',
  'kittens',
  'llamas',
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
  'smashing',
  'tea',
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

const Ipsum: StatelessComponent<IpsumProps> = (props) => {
  const { component } = props;
  const ipsum = generateIpsum();

  switch (component) {
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
}

// tslint:disable-next-line:max-classes-per-file
export class DabIpsum extends React.Component<DabIpsumProps, void> {
  public shouldComponentUpdate (prevProps: DabIpsumProps) {
    return prevProps.component !== this.props.component ||
      prevProps.count !== this.props.count;
  }

  public render () {
    const {
      component = 'p',
      count = 5
    } = this.props;

    const items = Array.apply(null, new Array(count)).map((v: void, index: number) => (
      <Ipsum key={index} component={component === 'p' ? component : 'li'} />
    ));

    switch (component) {
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
          <Ipsum component="text" />
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
