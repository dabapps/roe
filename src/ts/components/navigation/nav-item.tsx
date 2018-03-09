import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface NavItemProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Apply an active class to the NavItem
   */
  active?: boolean;
}

export class NavItem extends PureComponent<NavItemProps, {}> {
  public render () {
    const {
      className,
      children,
      active,
      component: Component = 'li'
    } = this.props;

    return (
      <Component className={classNames('nav-item', active && 'active', className)}>
        {children}
      </Component>
    );
  }
}

export default NavItem;
