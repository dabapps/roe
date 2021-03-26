import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type InputGroupAddonProps = {
  width?: number;
} & OptionalComponentPropAndHTMLAttributes;

/**
 * Used to display additional context within an `InputGroup`.
 */
const InputGroupAddon = (props: InputGroupAddonProps) => {
  const {
    children,
    className,
    width,
    style,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('input-group-addon', className)}
      style={{ width, ...style }}
    >
      {children}
    </Component>
  );
};

export default React.memo(InputGroupAddon);
