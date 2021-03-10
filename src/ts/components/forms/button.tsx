import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface ButtonPropsBase {
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

export type ButtonProps<
  C extends IntrinsicElementType = 'button'
> = OptionalComponentProp<C> & ButtonPropsBase;

/**
 * Used in place of a standard `button` tag, this component adds additional styles and effects.
 */
const Button: FunctionComponentOptionalComponentProp<
  'button',
  ButtonPropsBase
> = (props: ButtonProps) => {
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

export default memoWithComponentProp(Button);
