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
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & InputGroupAddonPropsBase;

/**
 * Used to display additional context within an `InputGroup`.
 */
const InputGroupAddon: FunctionComponentOptionalComponentProp<
  'div',
  InputGroupAddonPropsBase
> = (props: InputGroupAddonProps) => {
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

const InputGroupAddonMemo = memoWithComponentProp(InputGroupAddon);

export { InputGroupAddonMemo as InputGroupAddon };

export default InputGroupAddonMemo;
