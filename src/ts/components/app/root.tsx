import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import store, { StoreState } from '../../store';
import { ComponentProps } from '../../types';

export type AppRootProps = HTMLProps<HTMLElement> & ComponentProps & StoreState;

/**
 * This is the most important part of your app.
 * This component interacts with other Roe components to adjust styles at the root level.
 * Your app must have an AppRoot if you wish to used a fixed NavBar or Footer.
 */
export class AppRoot extends PureComponent<AppRootProps, {}> {
  public render () {
    const {
      component: Component = 'div',
      children,
      hasFixedFooter,
      hasFixedNavBar,
      navBarHeight,
      footerHeight,
      ...remainingProps,
    } = this.props;

    const myClassNames = [
      'app-root',
      hasFixedFooter && 'has-fixed-footer' || null,
      hasFixedNavBar && 'has-fixed-nav-bar' || null,
    ];

    const style = {
      paddingTop: hasFixedNavBar && navBarHeight,
      paddingBottom: hasFixedFooter && footerHeight,
    };

    return (
      <Component
        {...remainingProps}
        className={classNames(myClassNames)}
        style={style}
      >
        {children}
      </Component>
    );
  }
}

export default store.connect(AppRoot);
