import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

const NBSP = '\u00a0';

const shouldNotBeRendered = (children: any) => {
  return children === false || children === null || children === undefined || children === '';
};

export interface TableFixedRowHeaderProps {
  fixRowHeaders: true;
  rowHeaderWidth: number;
}

export interface TableUnfixedRowHeaderProps {
  fixRowHeaders?: false;
  rowHeaderWidth?: never;
}

export interface BaseTableProps {
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

export type TableProps = BaseTableProps &
  (TableFixedRowHeaderProps | TableUnfixedRowHeaderProps) &
  HTMLProps<HTMLElement>;

export const Table: StatelessComponent<TableProps> = (props) => {
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

export interface ComponentProps {
  component?: string;
}

export type TableSectionProps = ComponentProps & HTMLProps<HTMLElement>;

// tslint:disable-next-line:max-classes-per-file
export const TableHead: StatelessComponent<TableSectionProps> = (props) => {
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

// tslint:disable-next-line:max-classes-per-file
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

export type TableRowProps = ComponentProps & HTMLProps<HTMLElement>;

// tslint:disable-next-line:max-classes-per-file
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

export interface BaseTableCellProps extends ComponentProps {
  width?: number | string;
}

export type TableHeaderProps = BaseTableCellProps & HTMLProps<HTMLElement>;

// tslint:disable-next-line:max-classes-per-file
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

export type TableCellProps = BaseTableCellProps & HTMLProps<HTMLElement>;

// tslint:disable-next-line:max-classes-per-file
export const TableCell: StatelessComponent<TableCellProps> = (props) => {
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
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
}
