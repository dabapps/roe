import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type ModalCloseIconProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 */
export const ModalCloseIcon: StatelessComponent<ModalCloseIconProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-close-icon', className)}>
      {children}
    </Component>
  );
}

export default ModalCloseIcon;
