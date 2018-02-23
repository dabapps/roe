import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface NavProps extends ComponentProps, HTMLProps<HTMLElement> {

}

export class Nav extends PureComponent<NavProps, {}> {
  public render () {
    const {
      className,
      children,
      component: Component = 'ul',
      ...remainingProps,
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('nav', className)}>
        {children}
      </Component>
    );
  }
}
