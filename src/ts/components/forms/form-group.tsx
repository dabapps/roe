import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface FormGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Set the style `display: block;` with label above input.
   */
  block?: boolean;
}

/**
 * Used to group a label & form input (or select).
 */
export default class FormGroup extends PureComponent<FormGroupProps, {}> {
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
