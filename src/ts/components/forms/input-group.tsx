import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export interface InputGroupProps
  extends ComponentProps,
    React.HTMLProps<HTMLElement> {
  /**
   * Set the style `display: block;` so the group fills its parent.
   */
  block?: boolean;
}

/**
 * Used to group inputs, selects, buttons, and `InputGroupAddon`s.
 */
const InputGroup = (props: InputGroupProps) => {
  const {
    children,
    className,
    block,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const myClassNames = ['input-group', block ? 'block' : null, className];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
};

export default React.memo(InputGroup);
