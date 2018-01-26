import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface NavBarProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Fix the navbar to the top of the screen
   */
  fixed?: boolean;
  /**
   * Hide the navbar when scrolling down, but display when scrolling up
   */
  shy?: boolean;
  /**
   * Remove NavBar shadow
   */
  noShadow?: boolean;
}

export class NavBar extends PureComponent<NavBarProps, {}> {
  public render () {
    const {
      children,
      className,
      fixed,
      shy,
      noShadow,
      ...remainingProps,
    } = this.props;

    const myClassNames = [
      'nav-bar',
      fixed || shy ? 'fixed' : null,
      shy ? 'shy' : null,
      noShadow ? 'no-shadow' : null,
      className
    ];

    return (
      <div {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </div>
    );
  }
}

export default NavBar;
