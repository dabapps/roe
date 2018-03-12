import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface BannerProps extends ComponentProps, HTMLProps<HTMLElement> {
/**
 * If set, displays the component, otherwise it is hidden
 * @default true
 */
  open?: boolean;
/**
 * Positions the element at the 'top' or 'bottom' of the screen
 * @default 'bottom'
 */
  position?: 'top' | 'bottom';
}

/**
 * A Banner component which has fixed position and can take component as a child.
 */
export class Banner extends PureComponent<BannerProps, {}> {
  public render() {
    const {
      className,
      children,
      open = true,
      position = 'bottom',
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('banner', open && 'open', position, className)}
      >
        {children}
      </Component>
    );
  }
}

export default Banner;
