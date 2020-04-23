import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type SpacedGroupProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T> & {
  /**
   * Set the group to `display: block;` so it fills its parent.
   */
  block?: boolean;
  /**
   * Reduced spacing between items.
   */
  small?: boolean;
  /**
   * Increased spacing between items.
   */
  large?: boolean;
};

/**
 * Component to contain & automatically add space between inline elements.
 */
export class SpacedGroup<
  T extends ComponentElement = 'span'
> extends PureComponent<SpacedGroupProps<T>, {}> {
  public render() {
    const {
      children,
      className,
      block,
      small,
      large,
      component: Component = 'span',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'spaced-group',
      block ? 'block' : null,
      small ? 'small' : null,
      large ? 'large' : null,
      className,
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}

export default SpacedGroup;
