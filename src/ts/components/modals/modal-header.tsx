import * as classNames from 'classnames';
import * as React from 'react';
import { StatelessComponent } from 'react';
import { ModalContentProps } from '../../types';

export const ModalHeader: StatelessComponent<ModalContentProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-header', className)}>
      {children}
    </Component>
  );
}
