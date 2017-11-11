import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type ModalBodyProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used within a `Modal` to contain the main content.
 * See the [Modal](#modal) section for a full example.
 */
export const ModalBody: StatelessComponent<ModalBodyProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('modal-body', className)}>
      {children}
    </Component>
  );
}

export default ModalBody;
