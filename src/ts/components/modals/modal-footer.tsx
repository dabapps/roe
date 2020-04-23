import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ModalFooterProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T>;

/**
 * Footer for `Modal`s to contain submit buttons, link or sub-text.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalFooter<
  T extends ComponentElement = 'div'
> extends PureComponent<ModalFooterProps<T>, {}> {
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
        className={classNames('modal-footer', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ModalFooter;
