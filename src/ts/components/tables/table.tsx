import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type TableProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
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
};

/**
 * Table component with additional styles & functionality.
 */
export class Table<T extends ComponentElement> extends PureComponent<
  TableProps<T>,
  {}
> {
  public render() {
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
      className,
    ];

    return (
      <div className="table-wrapper">
        <div
          style={{ paddingLeft: fixRowHeaders ? rowHeaderWidth : undefined }}
        >
          <div className={scrollable ? 'table-scroller' : undefined}>
            <Component {...remainingProps} className={classNames(myClassNames)}>
              {children}
            </Component>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
