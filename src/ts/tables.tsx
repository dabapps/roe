import * as classNames from 'classnames';
import * as React from 'react';

const NBSP = '\u00a0';

export interface ITableProps {
  collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fixColumnHeaders?: boolean;
  columnHeaderMaxWidth?: number;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
  fill?: boolean;
}

export const Table: React.SFC<ITableProps & React.HTMLAttributes<HTMLTableElement>> = (props) => {
  const {
    className,
    children,
    collapse = 'sm',
    fixColumnHeaders,
    columnHeaderMaxWidth,
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
    fixColumnHeaders ? 'fix-column-headers' : null,
    striped ? 'striped' : null,
    bordered ? 'bordered' : null,
    hover ? 'hover' : null,
    condensed ? 'condensed' : null,
    fill ? 'fill' : null,
    className
  ];

  return (
    <div className="table-wrapper" style={{paddingLeft: fixColumnHeaders ? columnHeaderMaxWidth : null}}>
      <div className="table-scroller">
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

export interface ITableHeaderProps {
  maxWidth?: number | string;
}

export const TableHeader: React.SFC<ITableHeaderProps & React.HTMLAttributes<HTMLTableHeaderCellElement>> = (props) => {
  const {
    className,
    children,
    style,
    maxWidth,
    ...remainingProps
  } = props;

  return (
    <th
      {...remainingProps}
      className={classNames('table-header', className)}
      style={{maxWidth, width: maxWidth, ...style}}
    >
      {children || NBSP}
    </th>
  );
};

export interface ITableCellProps {
  maxWidth?: number | string;
}

export const TableCell: React.SFC<ITableCellProps & React.HTMLAttributes<HTMLTableCellElement>> = (props) => {
  const {
    className,
    children,
    style,
    maxWidth,
    ...remainingProps
  } = props;

  return (
    <td
      {...remainingProps}
      className={classNames('table-cell', className)}
      style={{maxWidth, width: maxWidth, ...style}}
    >
      {children || NBSP}
    </td>
  );
};
