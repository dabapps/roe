import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  component?: string;
  block?: boolean;
  large?: boolean;
  small?: boolean;
}

export class Button extends PureComponent<ButtonProps, void> {
  public render () {
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
      className
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}
