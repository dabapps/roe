import * as classNames from 'classnames';
import * as React from 'react';

const NBSP = '\u00a0';

export interface ITableFixedProps {
  fixRowHeaders: true;
  rowHeaderWidth: number;
}

export interface ITableUnfixedProps {
  fixRowHeaders?: false;
  rowHeaderWidth?: undefined;
}

export interface ITableProps {
  collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
  fill?: boolean;
}

export type TTable = React.SFC<
  (ITableFixedProps | ITableUnfixedProps) & ITableProps & React.HTMLAttributes<HTMLTableElement>
>;

export const Table: TTable = (props) => {
  const {
    className,
    children,
    collapse = 'sm',
    fixRowHeaders,
    rowHeaderWidth,
    striped,
    bordered,
    hover,
    condensed,
    fill,
    ...remainingProps
  } = props;

  const myClassNames = [
    'table',
    `${collapse}-collapse`,
    fixRowHeaders ? 'fix-column-headers' : null,
    striped ? 'striped' : null,
    bordered ? 'bordered' : null,
    hover ? 'hover' : null,
    condensed ? 'condensed' : null,
    fill ? 'fill' : null,
    className
  ];

  return (
    <div className="table-wrapper">
      <div
        className="table-scroller"
        style={{marginLeft: fixRowHeaders ? rowHeaderWidth : null}}
      >
        <table
          {...remainingProps}
          className={classNames(myClassNames)}
        >
          {children}
        </table>
      </div>
    </div>
  );
}

export const TableHead: React.SFC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <thead {...remainingProps} className={classNames('table-head', className)}>
      {children}
    </thead>
  );
};

export const TableBody: React.SFC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <tbody {...remainingProps} className={classNames('table-body', className)}>
      {children}
    </tbody>
  );
};

export const TableRow: React.SFC<React.HTMLAttributes<HTMLTableRowElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <tr {...remainingProps} className={classNames('table-row', className)}>
      {children}
    </tr>
  );
};

export interface ITableCellProps {
  width?: number | string;
}

export const TableHeader: React.SFC<ITableCellProps & React.HTMLAttributes<HTMLTableHeaderCellElement>> = (props) => {
  const {
    className,
    children,
    style,
    width,
    ...remainingProps
  } = props;

  return (
    <th
      {...remainingProps}
      className={classNames('table-header', className)}
      style={{width, ...style}}
    >
      {children || NBSP}
    </th>
  );
};

export const TableCell: React.SFC<ITableCellProps & React.HTMLAttributes<HTMLTableCellElement>> = (props) => {
  const {
    className,
    children,
    style,
    width,
    ...remainingProps
  } = props;

  return (
    <td
      {...remainingProps}
      className={classNames('table-cell', className)}
      style={{width, ...style}}
    >
      {children || NBSP}
    </td>
  );
};
