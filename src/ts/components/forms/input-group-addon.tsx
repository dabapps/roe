import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';

export interface InputGroupAddonProps {
  width: number;
}

/**
 * Used to display additional context within an `InputGroup`.
 */
const InputGroupAddon: FunctionComponentOptionalComponentProp<
  'div',
  InputGroupAddonProps
> = (props: OptionalComponentProp<'div'> & InputGroupAddonProps) => {
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
