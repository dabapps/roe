import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ModalCloseIconProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T>;

/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalCloseIcon<
  T extends ComponentElement = 'div'
> extends PureComponent<ModalCloseIconProps<T>, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('modal-close-icon', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ModalCloseIcon;
