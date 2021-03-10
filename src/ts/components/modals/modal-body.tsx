import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type ModalBodyProps<
  C extends IntrinsicElementType
> = OptionalComponentProp<C>;

/**
 * Used within a `Modal` to contain the main content.
 * See the [Modal](#modal) section for a full example.
 */
const ModalBody: FunctionComponentOptionalComponentProp<'div'> = (
  props: ModalBodyProps<'div'>
) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('modal-body', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(ModalBody);
