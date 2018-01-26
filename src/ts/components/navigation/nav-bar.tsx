import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface NavBarProps extends ComponentProps, HTMLProps<HTMLElement> {
  fixed?: boolean;
  shy?: boolean;
}

export class NavBar extends PureComponent<NavBarProps, {}> {
  public render () {
    const {
      children,
      className,
      fixed,
      shy,
      ...remainingProps,
    } = this.props;

    const myClassNames = [
      'nav-bar',
      fixed ? 'fixed' : null,
      shy ? 'shy' : null,
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
