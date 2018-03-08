import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { ComponentProps } from '../../types';

export interface SideBarProps extends HTMLProps<HTMLElement>, ComponentProps {
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
export class SideBar extends PureComponent<SideBarProps, {}> {
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
      <div className="side-bar-container">
        <CSSTransitionGroup
          transitionName="side-bar-transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          {open && <div className="side-bar-overlay" onClick={onClickOutside} />}
        </CSSTransitionGroup>
        <Component
          {...remainingProps}
          className={classNames('side-bar', position, open && 'open', className)}
        >
          {children}
        </Component>
      </div>
    );
  }
}

export default SideBar;
