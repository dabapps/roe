import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

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

export default Table;
