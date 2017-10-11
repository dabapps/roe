import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface InputGroupProps extends HTMLProps<HTMLDivElement> {
  component?: string;
  block?: boolean;
}

export class InputGroup extends PureComponent<InputGroupProps, void> {
  public render () {
    const {
      children,
      className,
      block,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'input-group',
      block ? 'block' : null,
      className
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}
