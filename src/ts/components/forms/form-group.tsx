import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type FormGroupProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
  /**
   * Set the style `display: block;` with label above input.
   */
  block?: boolean;
  /**
   * Offset the input, select, etc as if there was a label to the left of it
   */
  noLabel?: boolean;
};

/**
 * Used to group a label & form input (or select).
 */
export class FormGroup<
  T extends ComponentElement = 'div'
> extends PureComponent<FormGroupProps<T>, {}> {
  public render() {
    const {
      children,
      className,
      block,
      noLabel,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'form-group',
      block ? 'block' : null,
      noLabel ? 'no-label' : null,
      className,
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}

export default FormGroup;
