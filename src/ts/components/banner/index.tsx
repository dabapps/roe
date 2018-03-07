import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

interface BannerProps extends ComponentProps, HTMLProps<HTMLElement> {
  open?: boolean;
  top?: boolean;
}

class Banner extends PureComponent<BannerProps, {}> {
  public render() {
    const {
      className,
      children,
      open = true,
      top = false,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('banner', open && 'open', top && 'banner-top', className)}
      >
        {children}
      </Component>
    );
  }
}

export default Banner;
