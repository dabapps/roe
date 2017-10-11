import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type TableRowProps = ComponentProps & HTMLProps<HTMLElement>;

export const TableRow: StatelessComponent<TableRowProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'tr',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('table-row', className)}>
      {children}
    </Component>
  );
}

export default TableRow;
