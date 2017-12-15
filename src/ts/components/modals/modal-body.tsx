import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type ModalBodyProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used within a `Modal` to contain the main content.
 * See the [Modal](#modal) section for a full example.
 */
export default class ModalBody extends PureComponent<ModalBodyProps, {}> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('modal-body', className)}>
        {children}
      </Component>
    );
  }
}
