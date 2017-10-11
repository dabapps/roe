import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface ButtonProps extends HTMLProps<HTMLElement> {
  component?: string;
  block?: boolean;
  large?: boolean;
  small?: boolean;
}

export const Button: StatelessComponent<ButtonProps> = (props) => {
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
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}
