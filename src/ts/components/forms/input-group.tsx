import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type InputGroupProps = {
  /**
   * Set the style `display: block;` so the group fills its parent.
   */
  block?: boolean;
} & OptionalComponentPropAndHTMLAttributes;

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
