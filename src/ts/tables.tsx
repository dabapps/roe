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
  fixRowHeaders?: boolean;
  fixColumnHeaders?: boolean;
  scrollable?: boolean;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
  fill?: boolean;
  fixed?: boolean;
}

export type TTable = React.SFC<ITableProps & React.HTMLAttributes<HTMLTableElement>>;

export const Table: TTable = (props) => {
  const {
    className,
    children,
    collapse = 'sm',
    scrollable = true,
    fixRowHeaders,
    fixColumnHeaders,
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
    fixColumnHeaders ? 'fix-column-headers' : null,
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
      <div className={scrollable ? 'table-scroller' : undefined}>
        <Component
          {...remainingProps}
          className={classNames(myClassNames)}
        >
          {children}
        </Component>
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

export interface ITableCellUnfixedProps {
  fixed?: false | undefined;
  width?: number;
}

export interface ITableCellFixedProps {
  fixed: true;
  width: number;
}

export type TTableCellProps = React.SFC<(ITableCellUnfixedProps | ITableCellFixedProps) & IComponentProps &
  React.HTMLAttributes<HTMLTableHeaderCellElement>>;

export type TTableHeaderProps = React.SFC<(ITableCellUnfixedProps | ITableCellFixedProps) & IComponentProps &
  React.HTMLAttributes<HTMLTableHeaderCellElement>>;

export const TableHeader: TTableHeaderProps = (props) => {
  const {
    className,
    children,
    style,
    width,
    fixed,
    component: Component = 'th',
    ...remainingProps
  } = props;

  const content = shouldNotBeRendered(children) ? NBSP : children;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-header', fixed && 'with-fixed-element', className)}
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {
        fixed ? [
          (
            <span
              key={0}
              className="table-header table-fixed-element"
              style={{width}}
            >
              {content}
            </span>
          ),
          (
            <span
              key={1}
              className="table-header table-space-holder"
            >
              {content}
            </span>
          )
        ] : content
      }
    </Component>
  );
};

export const TableCell: TTableCellProps = (props) => {
  const {
    className,
    children,
    style,
    fixed,
    width,
    component: Component = 'td',
    ...remainingProps
  } = props;

  const content = shouldNotBeRendered(children) ? NBSP : children;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-header', fixed && 'with-fixed-element', className)}
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {
        fixed ? [
          (
            <span
              key={0}
              className="table-cell table-fixed-element"
              style={{width}}
            >
              {content}
            </span>
          ),
          (
            <span
              key={1}
              className="table-cell table-space-holder"
            >
              {content}
            </span>
          )
        ] : content
      }
    </Component>
  );
};
