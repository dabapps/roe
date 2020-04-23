import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type BannerProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
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
};

/**
 * A Banner component that displays fixed to the top or bottom of the screen.
 */
export class Banner<T extends ComponentElement> extends PureComponent<
  BannerProps<T>,
  {}
> {
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
