import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

type TableHeadProps = ComponentProps & HTMLProps<HTMLElement>;

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
