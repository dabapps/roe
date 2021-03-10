import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface TablePropsBase {
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
   * Fix the first cell of every row so they do not scroll.
   */
  fixRowHeaders?: boolean;
  /**
   * Set a width for the first column when fixed.
   */
  rowHeaderWidth?: number;
}

export type TableProps<
  C extends IntrinsicElementType = 'table'
> = OptionalComponentProp<C> & TablePropsBase;

/**
 * Table component with additional styles & functionality.
 */
const Table: FunctionComponentOptionalComponentProp<'table', TablePropsBase> = (
  props: TableProps
) => {
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
    className,
  ];

  return (
    <div className="table-wrapper">
      <div style={{ paddingLeft: fixRowHeaders ? rowHeaderWidth : undefined }}>
        <div className={scrollable ? 'table-scroller' : undefined}>
          <Component {...remainingProps} className={classNames(myClassNames)}>
            {children}
          </Component>
        </div>
      </div>
    </div>
  );
};

const TableMemo = memoWithComponentProp(Table);

export { TableMemo as Table };

export default TableMemo;
