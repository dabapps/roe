import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type ModalHeaderProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C>;

/**
 * Header for `Modal`s to display a title.
 * See the [Modal](#modal) section for a full example.
 */
const ModalHeader: FunctionComponentOptionalComponentProp<'div'> = (
  props: ModalHeaderProps
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
      className={classNames('modal-header', className)}
    >
      {children}
    </Component>
  );
};

const ModalHeaderMemo = memoWithComponentProp(ModalHeader);

export { ModalHeaderMemo as ModalHeader };

export default ModalHeaderMemo;
