import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type ModalCloseIconProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalCloseIcon extends PureComponent<ModalCloseIconProps, {}> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('modal-close-icon', className)}>
        {children}
      </Component>
    );
  }
}

export default ModalCloseIcon;
