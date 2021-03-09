import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 * See the [Modal](#modal) section for a full example.
 */
const ModalCloseIcon: FunctionComponentOptionalComponentProp<'div'> = (
  props: OptionalComponentProp<'div'>
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
