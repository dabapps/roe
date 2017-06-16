import * as classNames from 'classnames';
import * as React from 'react';

const NBSP = '\u00a0';

export interface ITableProps {
  collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fixRowHeaders?: boolean;
  fixColumnHeaders?: boolean;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
  fill?: boolean;
}

export type TTable = React.SFC<ITableProps & React.HTMLAttributes<HTMLTableElement>>;

export const Table: TTable = (props) => {
  const {
    className,
    children,
    collapse = 'sm',
    fixRowHeaders,
    fixColumnHeaders,
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
    fixRowHeaders ? 'fix-row-headers' : null,
    fixColumnHeaders ? 'fix-column-headers' : null,
    striped ? 'striped' : null,
    bordered ? 'bordered' : null,
    hover ? 'hover' : null,
    condensed ? 'condensed' : null,
    fill ? 'fill' : null,
    className
  ];

  return (
    <div className="table-wrapper">
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

export interface ITableCellFixedProps {
  fixed: true;
  width: number | string;
}

export interface ITableCellUnfixedProps {
  fixed?: false | undefined;
  width?: undefined;
}

export type TTableCellProps = React.SFC<(ITableCellFixedProps | ITableCellUnfixedProps) &
  React.HTMLAttributes<HTMLTableHeaderCellElement>>;

export type TTableHeaderProps = React.SFC<(ITableCellFixedProps | ITableCellUnfixedProps) &
  React.HTMLAttributes<HTMLTableHeaderCellElement>>;

export const TableHeader: TTableHeaderProps = (props) => {
  const {
    className,
    children,
    style,
    width,
    fixed,
    ...remainingProps
  } = props;

  const content = children || NBSP;

  return (
    <th
      {...remainingProps}
      className={classNames('table-header', fixed && 'with-fixed-header', className)}
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {
        fixed ? [
          (
            <span
              key={0}
              className="table-header fixed-header"
              style={{width, maxWidth: width, minWidth: width}}
            >
              {content}
            </span>
          ),
          (
            <span key={1}>
              {NBSP}
            </span>
          )
        ] : content
      }
    </th>
  );
};

export const TableCell: TTableCellProps = (props) => {
  const {
    className,
    children,
    style,
    fixed,
    width,
    ...remainingProps
  } = props;

  return (
    <td
      {...remainingProps}
      className={classNames('table-cell', className)}
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {children || NBSP}
    </td>
  );
};
