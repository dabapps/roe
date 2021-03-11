import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type ModalFooterProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Footer for `Modal`s to contain submit buttons, link or sub-text.
 * See the [Modal](#modal) section for a full example.
 */
const ModalFooter = (props: ModalFooterProps) => {
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

export default React.memo(ModalFooter);
