import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface SidebarProps extends HTMLProps<HTMLElement>, ComponentProps {
  open?: boolean;
  position: 'left' | 'right';
}

export class Sidebar extends PureComponent<SidebarProps, {}> {
  public render () {
    const {
      className,
      children,
      open,
      position,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('sidebar', position, open && 'open')}
      >
        {children}
      </Component>
    );
  }
}

export default Sidebar;
