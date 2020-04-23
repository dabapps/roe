import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export interface InputGroupProps
  extends ComponentProps,
    HTMLProps<HTMLElement> {
  /**
   * Set the style `display: block;` so the group fills its parent.
   */
  block?: boolean;
}

/**
 * Used to group inputs, selects, buttons, and `InputGroupAddon`s.
 */
export class InputGroup extends PureComponent<InputGroupProps, {}> {
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
