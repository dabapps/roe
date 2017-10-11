import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ModalContentProps } from '../../types';

export const ModalCloseIcon: StatelessComponent<ModalContentProps> = (props) => {
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
