import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type ModalHeaderProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Header for `Modal`s to display a title.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalHeader extends PureComponent<ModalHeaderProps, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'div' as any,
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
