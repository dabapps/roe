import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { NBSP } from '../../constants';
import { BaseTableCellProps, ComponentElement } from '../../types';
import { shouldNotBeRendered } from '../../utils';

export type TableCellProps<T extends ComponentElement> = BaseTableCellProps<T>;

/**
 * Table cell component with additional styles & functionality, used within table rows.
 * See the [Table](#table) section for a full example.
 */
export class TableCell<T extends ComponentElement = 'td'> extends PureComponent<
  TableCellProps<T>,
  {}
> {
  public render() {
    const {
      className,
      children,
      style,
      width,
      component: Component = 'td',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('table-cell', className)}
        style={{ width, maxWidth: width, minWidth: width, ...style }}
      >
        {shouldNotBeRendered(children) ? NBSP : children}
      </Component>
    );
  }
}

export default TableCell;
