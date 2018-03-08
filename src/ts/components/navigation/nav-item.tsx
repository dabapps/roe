import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type NavItemProps = ComponentProps & HTMLProps<HTMLElement>;

export class NavItem extends PureComponent<NavItemProps, {}> {
  public render () {
    const {
      className,
      children,
      component: Component = 'li'
    } = this.props;

    return (
      <Component className={classNames('nav-item', className)}>
        {children}
      </Component>
    );
  }
}

export default NavItem;
