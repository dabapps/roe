import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type ModalCloseIconProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 * See the [Modal](#modal) section for a full example.
 */
const ModalCloseIcon = (props: ModalCloseIconProps) => {
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

export default React.memo(ModalCloseIcon);
