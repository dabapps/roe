import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface ComponentProps {
  component?: string;
}

export type TabsProps = ComponentProps & HTMLProps<HTMLElement>;

export const Tabs: StatelessComponent<TabsProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'ul',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('tabs', className)}>
      {children}
    </Component>
  );
}

export interface TabProps extends ComponentProps, HTMLProps<HTMLElement> {
  active?: boolean;
}

export const Tab: StatelessComponent<TabProps> = (props) => {
  const {
    className,
    children,
    active,
    component: Component = 'li',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('tab', active && 'active', className)}>
      {children}
    </Component>
  );
}
