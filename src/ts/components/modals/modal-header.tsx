import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ModalHeaderProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T>;

/**
 * Header for `Modal`s to display a title.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalHeader<
  T extends ComponentElement = 'div'
> extends PureComponent<ModalHeaderProps<T>, {}> {
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
        className={classNames('modal-header', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ModalHeader;
