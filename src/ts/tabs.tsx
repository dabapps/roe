import * as classNames from 'classnames';
import * as React from 'react';

export const Tabs: React.SFC<React.HTMLAttributes<HTMLUListElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <ul {...remainingProps} className={classNames('tabs', className)}>
      {children}
    </ul>
  );
}

export interface ITabProps {
  active?: boolean;
}

export const Tab: React.SFC<ITabProps & React.HTMLAttributes<HTMLLIElement>> = (props) => {
  const {
    className,
    children,
    active,
    ...remainingProps
  } = props;

  return (
    <li {...remainingProps} className={classNames('tab', active && 'active', className)}>
      {children}
    </li>
  );
}
