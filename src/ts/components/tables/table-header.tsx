import * as classNames from 'classnames';
import * as React from 'react';

import { NBSP } from '../../constants';
import {
  TableCellPropsBase,
  OptionalComponentProp,
  FunctionComponentOptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { shouldNotBeRendered, memoWithComponentProp } from '../../utils';

export type TableHeaderProps<
  C extends IntrinsicElementType = 'th'
> = OptionalComponentProp<C> & TableCellPropsBase;

/**
 * Table header component with additional styles & functionality, used to style and or fix table headers.
 * See the [Table](#table) section for a full example.
 */
const TableHeader: FunctionComponentOptionalComponentProp<
  'th',
  TableCellPropsBase
> = (props: TableHeaderProps) => {
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
      style={{ width, maxWidth: width, minWidth: width, ...style }}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
};

const TableHeaderMemo = memoWithComponentProp(TableHeader);

export { TableHeaderMemo as TableHeader };

export default TableHeaderMemo;
