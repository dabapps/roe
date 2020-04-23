import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ButtonProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
  /**
   * Set the style `display: block;`.
   */
  block?: boolean;
  /**
   * Make the button large
   */
  large?: boolean;
  /**
   * Make the button small
   */
  small?: boolean;
};

/**
 * Used in place of a standard `button` tag, this component adds additional styles and effects.
 */
export class Button<
  T extends ComponentElement = 'button'
> extends PureComponent<ButtonProps<T>, {}> {
  public render() {
    const {
      children,
      className,
      block,
      large,
      small,
      component: Component = 'button',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'button',
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

export default Button;
