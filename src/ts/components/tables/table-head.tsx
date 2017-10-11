import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { TableSectionProps } from '../../types';

export const TableHead: StatelessComponent<TableSectionProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'thead',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('table-head', className)}>
      {children}
    </Component>
  );
}
