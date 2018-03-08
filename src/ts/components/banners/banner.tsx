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
 * If set to 'top', positions the component at the top
 * @default 'bottom'
 */
  position?: 'top' | 'bottom';
}

/**
 * A Banner component which has fixed position and can take component as a child.
 * See the [Banner](#banners) section for a full example.
 */
export class Banner extends PureComponent<BannerProps, {}> {
  public render() {
    const {
      className,
      children,
      open = true,
      position = false,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('banner', open && 'open', position === 'top' && 'top', className)}
      >
        {children}
      </Component>
    );
  }
}

export default Banner;
