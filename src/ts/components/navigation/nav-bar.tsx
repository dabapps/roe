import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import { addClassName, removeClassName } from '../../utils';

const WITH_FIXED_NAV_BAR = 'with-fixed-nav-bar';

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
  public componentWillMount () {
    this.updateBodyClass(this.props);
  }

  public componentWillUpdate (nextProps: NavBarProps) {
    if (this.props.fixed !== nextProps.fixed || this.props.shy !== nextProps.shy) {
      this.updateBodyClass(nextProps);
    }
  }

  public render () {
    const {
      children,
      className,
      fixed,
      shy,
      noShadow,
      component: Component = 'div',
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
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }

  private updateBodyClass (props: NavBarProps) {
    const { fixed, shy } = props;

    if (fixed || shy) {
      addClassName(document.body, WITH_FIXED_NAV_BAR);
    } else {
      removeClassName(document.body, WITH_FIXED_NAV_BAR)
    }
  }
}

export default NavBar;
