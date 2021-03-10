import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface InputGroupPropsBase {
  /**
   * Set the style `display: block;` so the group fills its parent.
   */
  block?: boolean;
}

export type InputGroupProps<
  C extends IntrinsicElementType
> = OptionalComponentProp<C> & InputGroupPropsBase;

/**
 * Used to group inputs, selects, buttons, and `InputGroupAddon`s.
 */
const InputGroup: FunctionComponentOptionalComponentProp<
  'div',
  InputGroupPropsBase
> = (props: InputGroupProps<'div'>) => {
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

export default memoWithComponentProp(InputGroup);
