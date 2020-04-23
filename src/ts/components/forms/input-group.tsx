import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type InputGroupProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
  /**
   * Set the style `display: block;` so the group fills its parent.
   */
  block?: boolean;
};

/**
 * Used to group inputs, selects, buttons, and `InputGroupAddon`s.
 */
export class InputGroup<
  T extends ComponentElement = 'div'
> extends PureComponent<InputGroupProps<T>, {}> {
  public render() {
    const {
      children,
      className,
      block,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = ['input-group', block ? 'block' : null, className];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}

export default InputGroup;
