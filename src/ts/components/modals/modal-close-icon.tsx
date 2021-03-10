import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type ModalCloseIconProps<
  C extends IntrinsicElementType
> = OptionalComponentProp<C>;

/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 * See the [Modal](#modal) section for a full example.
 */
const ModalCloseIcon: FunctionComponentOptionalComponentProp<'div'> = (
  props: ModalCloseIconProps<'div'>
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
      className={classNames('modal-close-icon', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(ModalCloseIcon);
