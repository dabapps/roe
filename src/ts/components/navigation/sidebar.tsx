import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface SidebarProps extends HTMLProps<HTMLElement>, ComponentProps {
  /**
   * Sidebar is hidden off screen if this is falsy.
   */
  open?: boolean;
  /**
   * Position the Sidebar to the left or right of the screen.
   */
  position: 'left' | 'right';
  /**
   * Callback to trigger when the user clicks outside of the `Sidebar`.
   */
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}

/**
 * Sidebar navigation that opens over the content.
 */
export class Sidebar extends PureComponent<SidebarProps, {}> {
  public render () {
    const {
      className,
      children,
      open,
      position,
      onClickOutside,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <div>
        <div className="sidebar-overlay" onClick={onClickOutside} />
        <Component
          {...remainingProps}
          className={classNames('sidebar', position, open && 'open', className)}
        >
          {children}
        </Component>
      </div>
    );
  }
}

export default Sidebar;
