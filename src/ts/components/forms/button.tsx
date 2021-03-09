import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export interface ButtonProps
  extends ComponentProps,
    React.HTMLProps<HTMLElement> {
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
}

/**
 * Used in place of a standard `button` tag, this component adds additional styles and effects.
 */
const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    block,
    large,
    small,
    component: Component = 'button',
    ...remainingProps
  } = props;

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
};

export default React.memo(Button);
