import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface TableFixedRowHeaderProps {
  fixRowHeaders: true;
  rowHeaderWidth: number;
}

export interface TableUnfixedRowHeaderProps {
  /**
   * Fix the first cell of every row so they do not scroll.
   */
  fixRowHeaders?: false;
  /**
   * Set a width for the first column when fixed.
   */
  rowHeaderWidth?: never;
}

export interface BaseTableProps extends ComponentProps {
  /**
   * Currently unused.
   * @default "'sm'"
   */
  collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Allows the table to scroll horizontally.
   */
  scrollable?: boolean;
  /**
   * Applies striped styles to the table.
   */
  striped?: boolean;
  /**
   * Adds border styles to the table.
   */
  bordered?: boolean;
  /**
   * Applies styles to table rows on hover.
   */
  hover?: boolean;
  /**
   * Condensed table padding.
   */
  condensed?: boolean;
  /**
   * Fill the parent element.
   */
  fill?: boolean;
  /**
   * Applies `table-layout: fixed;` style so that all columns are the same width.
   */
  fixed?: boolean;
  /**
   * Sets a fixed height for the table
   */
  height?: number;
}

export type TableProps = (TableFixedRowHeaderProps | TableUnfixedRowHeaderProps) &
  BaseTableProps & HTMLProps<HTMLElement>;

/**
 * Table component with additional styles & functionality.
 */
export class Table extends PureComponent<TableProps, {}> {
  public render () {
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
      height,
      component: Component = 'table',
      ...remainingProps
    } = this.props;

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
      <div
        className={scrollable ? 'table-scroll-vertical' : undefined}
        style={{height}}
      >
        <div
          className={scrollable ? 'table-scroll-horizontal' : undefined}
          style={{paddingLeft: fixRowHeaders ? rowHeaderWidth : null}}
        >
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
}

export default Table;
