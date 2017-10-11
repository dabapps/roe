import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { NBSP } from '../../constants';
import { BaseTableCellProps } from '../../types';
import { shouldNotBeRendered } from '../../utils';

export type TableHeaderProps = BaseTableCellProps & HTMLProps<HTMLElement>;

export const TableHeader: StatelessComponent<TableHeaderProps> = (props) => {
  const {
    className,
    children,
    style,
    width,
    component: Component = 'th',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-header', className)}
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
}

export default TableHeader;
