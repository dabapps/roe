import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';

/**
 * Header for `Modal`s to display a title.
 * See the [Modal](#modal) section for a full example.
 */
const ModalHeader: FunctionComponentOptionalComponentProp<'div'> = (
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
      className={classNames('modal-header', className)}
    >
      {children}
    </Component>
  );
};

export default React.memo(ModalHeader);
