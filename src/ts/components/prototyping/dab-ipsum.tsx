import * as React from 'react';
import { StatelessComponent } from 'react';
import { generateIpsum } from '../../utils';
import { WORDS } from '../../words';

export interface IpsumProps {
  /**
   * Set the component to render a different element type.
   */
  component: 'li' | 'p' | 'text';
}

export interface DabIpsumProps {
  /**
   * Set the component to render a different element type.
   */
  component?: 'ul' | 'ol' | 'p' | 'text';
  /**
   * The number of elements (e.g. paragraphs) to render.
   */
  count?: number;
}

const Ipsum: StatelessComponent<IpsumProps> = (props) => {
  const { component } = props;
  const ipsum = generateIpsum(WORDS);

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

/**
 * Custom Ipsum component, useful for rendering placeholder text when prototyping.
 */
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

export default DabIpsum;
