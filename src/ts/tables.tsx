import * as classNames from 'classnames';
import * as React from 'react';

// tslint:disable-next-line:no-unused-variable
interface ITableProps {
  collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fixHeaders?: 'none' | 'both' | 'column' | 'row';
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
}

export const Table: React.SFC<ITableProps & React.HTMLAttributes<HTMLTableElement>> = (props) => {
  const {
    className,
    children,
    collapse = 'sm',
    fixHeaders = 'none',
    striped,
    bordered,
    hover,
    condensed,
    ...remainingProps
  } = props;

  const myClassNames = [
    'table',
    `${collapse}-collapse`,
    `fix-headers-${fixHeaders}`,
    striped ? 'striped' : null,
    bordered ? 'bordered' : null,
    hover ? 'hover' : null,
    condensed ? 'condensed' : null,
    className
  ]

  return (
    <table {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </table>
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

export const TableHeader: React.SFC<React.HTMLAttributes<HTMLTableHeaderCellElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <th {...remainingProps} className={classNames('table-header', className)}>
      {children}
    </th>
  );
};

// tslint:disable-next-line:no-unused-variable
interface ITableCellProps {
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
      style={{maxWidth, ...style}}
    >
      {children}
    </td>
  );
};
