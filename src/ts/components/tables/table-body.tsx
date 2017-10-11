import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { TableSectionProps } from '../../types';

export const TableBody: StatelessComponent<TableSectionProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'tbody',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('table-body', className)}>
      {children}
    </Component>
  );
}

export default TableBody;
