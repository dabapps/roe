import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ModalBodyProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
>;

/**
 * Used within a `Modal` to contain the main content.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalBody<
  T extends ComponentElement = 'div'
> extends PureComponent<ModalBodyProps<T>, {}> {
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
        className={classNames('modal-body', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ModalBody;
