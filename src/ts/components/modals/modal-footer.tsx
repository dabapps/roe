import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Footer for `Modal`s to contain submit buttons, link or sub-text.
 * See the [Modal](#modal) section for a full example.
 */
const ModalFooter: FunctionComponentOptionalComponentProp<'div'> = (
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
      className={classNames('modal-footer', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(ModalFooter);
