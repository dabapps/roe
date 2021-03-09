import * as classNames from 'classnames';
import * as React from 'react';

import { NBSP } from '../../constants';
import {
  BaseTableCellProps,
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { shouldNotBeRendered, memoWithComponentProp } from '../../utils';

/**
 * Table cell component with additional styles & functionality, used within table rows.
 * See the [Table](#table) section for a full example.
 */
const TableCell: FunctionComponentOptionalComponentProp<
  'td',
  BaseTableCellProps
> = (props: OptionalComponentProp<'td'> & BaseTableCellProps) => {
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
      style={{ width, maxWidth: width, minWidth: width, ...style }}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
};

export default memoWithComponentProp(TableCell);
