import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type ModalHeaderProps = ComponentProps & HTMLProps<HTMLElement>;

export const ModalHeader: StatelessComponent<ModalHeaderProps> = (props) => {
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

export default ModalHeader;
