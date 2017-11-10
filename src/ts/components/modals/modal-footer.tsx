import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

type ModalFooterProps = ComponentProps & HTMLProps<HTMLElement>;

export const ModalFooter: StatelessComponent<ModalFooterProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-footer', className)}>
      {children}
    </Component>
  );
}

export default ModalFooter;
