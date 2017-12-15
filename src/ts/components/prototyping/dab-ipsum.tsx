import * as React from 'react';
import { PureComponent } from 'react';
import { generateIpsum } from '../../utils';
import { WORDS } from '../../words';

export interface DabIpsumProps {
  /**
   * Set the component to render a different element type.
   * @default "'p'"
   */
  component?: 'ul' | 'ol' | 'p' | 'text';
  /**
   * The number of elements (e.g. paragraphs) to render.
   * @default 5
   */
  count?: number;
}

const ipsumItem = (component: DabIpsumProps['component']) => {
  const ipsum = generateIpsum(WORDS);

  switch (component) {
    case 'ol':
    case 'ul':
      return (
        <li>
          {ipsum}
        </li>
      );
    case 'text':
      return ipsum;
    // case 'p': NOTE: this is the default, so a case for it is not needed
    default:
      return (
        <p>
          {ipsum}
        </p>
      );
  }
};

/**
 * Custom Ipsum component, useful for rendering placeholder text when prototyping.
 */
export class DabIpsum extends PureComponent<DabIpsumProps, {}> {
  public shouldComponentUpdate (prevProps: DabIpsumProps) {
    return prevProps.component !== this.props.component ||
      prevProps.count !== this.props.count;
  }

  public render () {
    const {
      component = 'p',
      count = 5
    } = this.props;

    const items = Array.apply(null, new Array(count));

    switch (component) {
      case 'ul':
        return (
          <ul>
            {items.map(() => ipsumItem(component))}
          </ul>
        );
      case 'ol':
        return (
          <ol>
            {items.map(() => ipsumItem(component))}
          </ol>
        );
      case 'text':
        return (
          <span>
            {ipsumItem(component)}
          </span>
        );
      // case 'p'
      default:
        return (
          <div>
            {items.map(() => ipsumItem(component))}
          </div>
        );
    }
  }
}

export default DabIpsum;
