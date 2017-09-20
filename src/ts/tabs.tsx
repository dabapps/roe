import * as classNames from 'classnames';
import * as React from 'react';

export interface IComponentProps {
  component?: string;
}

export const Tabs: React.SFC<IComponentProps & React.HTMLAttributes<HTMLUListElement>> = (props) => {
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

export interface ITabProps extends IComponentProps {
  active?: boolean;
}

export const Tab: React.SFC<ITabProps & React.HTMLAttributes<HTMLLIElement>> = (props) => {
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
