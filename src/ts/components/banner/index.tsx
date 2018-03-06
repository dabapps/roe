import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { ComponentProps } from '../../types';

export type BannerProps = ComponentProps & HTMLProps<HTMLElement>;

export class Banner extends PureComponent<BannerProps, {}> {
  public render() {
    const {
      className,
      children,
      height = 50,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <CSSTransitionGroup
        transitionName="banner-transition"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
      >
        <Component {...remainingProps} style={{height}} className={classNames('banner', className)}>
          {children}
        </Component>
      </CSSTransitionGroup>
    );
  }
}

export default Banner;
