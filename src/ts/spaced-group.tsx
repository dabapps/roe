import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface SpacedGroupProps extends HTMLProps<HTMLSpanElement> {
  component?: string;
  block?: boolean;
  small?: boolean;
  large?: boolean;
}

export class SpacedGroup extends PureComponent<SpacedGroupProps, void> {
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
