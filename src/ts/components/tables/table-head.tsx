import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type TableHeadProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Table head component with additional styles & functionality, used to contain table headers.
 */
export const TableHead: StatelessComponent<TableHeadProps> = (props) => {
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

export default TableHead;
