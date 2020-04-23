import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type NavProps<T extends ComponentElement> = ComponentAndHTMLProps<T>;

/**
 * Used to group NavItems inside a NavBar or SideBar.
 * You should use the atomic display classes e.g. `"display-none md-display-block"`
 * to hide the nav and replace it with a menu button (for controlling the SideBar) on smaller screens.
 * The same Nav can be used in both a NavBar and SideBar, and will automatically style itself sensibly.
 */
export class Nav<T extends ComponentElement = 'ul'> extends PureComponent<
  NavProps<T>,
  {}
> {
  public render() {
    const {
      className,
      children,
      component: Component = 'ul',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('nav', className)}>
        {children}
      </Component>
    );
  }
}

export default Nav;
