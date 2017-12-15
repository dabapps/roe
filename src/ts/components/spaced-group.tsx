import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../types';

export interface SpacedGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
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
}

/**
 * Component to contain & automatically add space between inline elements.
 */
export default class SpacedGroup extends PureComponent<SpacedGroupProps, {}> {
  public render () {
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
      className
    ]

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}
