import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface FormGroupProps extends HTMLProps<HTMLDivElement> {
  component?: string;
  block?: boolean;
}

export class FormGroup extends PureComponent<FormGroupProps, void> {
  public render () {
    const {
      children,
      className,
      block,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'form-group',
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
