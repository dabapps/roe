import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface ComponentProps {
  component?: string;
}

export type TabsProps = ComponentProps & HTMLProps<HTMLUListElement>;

export class Tabs extends PureComponent<TabsProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'ul',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('tabs', className)}>
        {children}
      </Component>
    );
  }
}

export interface TabProps extends ComponentProps, HTMLProps<HTMLUListElement> {
  active?: boolean;
}

// tslint:disable-next-line:max-classes-per-file
export class Tab extends PureComponent<TabProps, void> {
  public render () {
    const {
      className,
      children,
      active,
      component: Component = 'li',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('tab', active && 'active', className)}>
        {children}
      </Component>
    );
  }
}
