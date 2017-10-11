import * as classNames from 'classnames';
import * as React from 'react';

const NBSP = '\u00a0';

const shouldNotBeRendered = (children: any) => {
  return children === false || children === null || children === undefined || children === '';
};

export interface ITableFixedProps {
  fixRowHeaders: true;
  rowHeaderWidth: number;
}

export interface ITableUnfixedProps {
  fixRowHeaders?: false;
  rowHeaderWidth?: undefined;
}

export interface ITableProps {
  component?: string;
  collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scrollable?: boolean;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
  fill?: boolean;
  fixed?: boolean;
}

export type TTable = React.SFC<
  (ITableFixedProps | ITableUnfixedProps) & ITableProps & React.HTMLAttributes<HTMLTableElement>
>;

export const Table: TTable = (props) => {
  const {
    className,
    children,
    collapse = 'sm',
    scrollable = true,
    fixRowHeaders,
    rowHeaderWidth,
    striped,
    bordered,
    hover,
    condensed,
    fill,
    fixed,
    component: Component = 'table',
    ...remainingProps
  } = props;

  const myClassNames = [
    'table',
    `${collapse}-collapse`,
    fixRowHeaders ? 'fix-row-headers' : null,
    striped ? 'striped' : null,
    bordered ? 'bordered' : null,
    hover ? 'hover' : null,
    condensed ? 'condensed' : null,
    fill ? 'fill' : null,
    fixed ? 'fixed' : null,
    className
  ];

  return (
    <div className="table-wrapper">
      <div style={{paddingLeft: fixRowHeaders ? rowHeaderWidth : null}}>
        <div className={scrollable ? 'table-scroller' : undefined}>
          <Component
            {...remainingProps}
            className={classNames(myClassNames)}
          >
            {children}
          </Component>
        </div>
      </div>
    </div>
  );
}

export interface IComponentProps {
  component?: string;
}

export const TableHead: React.SFC<IComponentProps & React.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
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
};

export const TableBody: React.SFC<IComponentProps & React.HTMLAttributes<HTMLTableSectionElement>> = (props) => {
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
};

export const TableRow: React.SFC<IComponentProps & React.HTMLAttributes<HTMLTableRowElement>> = (props) => {
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
};

export interface ITableCellProps extends IComponentProps {
  width?: number | string;
}

export const TableHeader: React.SFC<ITableCellProps & React.HTMLAttributes<HTMLTableHeaderCellElement>> = (props) => {
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
      style={{width, maxWidth: width, ...style}}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
};

export const TableCell: React.SFC<ITableCellProps & React.HTMLAttributes<HTMLTableCellElement>> = (props) => {
  const {
    className,
    children,
    style,
    width,
    component: Component = 'td',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-cell', className)}
      style={{width, maxWidth: width, ...style}}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
};
