import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type ButtonProps = {
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
} & OptionalComponentPropAndHTMLAttributes &
  React.ButtonHTMLAttributes<HTMLElement>;

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

  // Cast necessary otherwise types are too complex
  const CastComponent = Component as 'button';

  return (
    <CastComponent {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </CastComponent>
  );
};

export default React.memo(Button);
