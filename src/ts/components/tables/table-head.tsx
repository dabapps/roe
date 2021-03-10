import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type TableHeadProps<
  C extends IntrinsicElementType = 'thead'
> = OptionalComponentProp<C>;

/**
 * Table head component with additional styles & functionality, used to contain table headers.
 * See the [Table](#table) section for a full example.
 */
const TableHead: FunctionComponentOptionalComponentProp<'thead'> = (
  props: TableHeadProps
) => {
  const {
    className,
    children,
    component: Component = 'thead',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-head', className)}
    >
      {children}
    </Component>
  );
};

const TableHeadMemo = memoWithComponentProp(TableHead);

export { TableHeadMemo as TableHead };

export default TableHeadMemo;
