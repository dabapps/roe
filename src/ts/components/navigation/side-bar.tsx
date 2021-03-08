import * as classNames from 'classnames';
import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ComponentProps } from '../../types';

export interface SideBarProps
  extends React.HTMLProps<HTMLElement>,
    ComponentProps {
  /**
   * SideBar is hidden off screen if this is falsy.
   */
  open?: boolean;
  /**
   * Position the SideBar to the left or right of the screen.
   */
  position: 'left' | 'right';
  /**
   * Remove SideBar shadow
   */
  noShadow?: boolean;
  /**
   * Callback to trigger when the user clicks outside of the `SideBar`.
   */
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}

const TIMEOUT = {
  appear: 300,
  enter: 300,
  exit: 200,
};

/**
 * SideBar navigation that opens over the content. Often used as the primary navigation on small devices.
 * See the [Nav](#nav) section for more details.
 */
const SideBar = (props: SideBarProps) => {
  const {
    className,
    children,
    open,
    position,
    onClickOutside,
    noShadow,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <div className={classNames('side-bar-container', className)}>
      <TransitionGroup>
        {open && (
          <CSSTransition classNames="side-bar-transition" timeout={TIMEOUT}>
            <div className="side-bar-overlay" onClick={onClickOutside} />
          </CSSTransition>
        )}
      </TransitionGroup>
      <Component
        {...remainingProps}
        className={classNames(
          'side-bar',
          noShadow && 'no-shadow',
          position,
          open && 'open'
        )}
      >
        {children}
      </Component>
    </div>
  );
};

export default React.memo(SideBar);
