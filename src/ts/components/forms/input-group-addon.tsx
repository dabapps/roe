import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface InputGroupAddonPropsBase {
  width?: number;
}

export type InputGroupAddonProps<
  C extends IntrinsicElementType
> = OptionalComponentProp<C> & InputGroupAddonPropsBase;

/**
 * Used to display additional context within an `InputGroup`.
 */
const InputGroupAddon: FunctionComponentOptionalComponentProp<
  'div',
  InputGroupAddonPropsBase
> = (props: InputGroupAddonProps<'div'>) => {
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

export default memoWithComponentProp(InputGroupAddon);
