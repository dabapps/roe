import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type ModalHeaderProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Header for `Modal`s to display a title.
 * See the [Modal](#modal) section for a full example.
 */
const ModalHeader = (props: ModalHeaderProps) => {
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
