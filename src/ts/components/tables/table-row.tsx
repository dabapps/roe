import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type TableRowProps<
  C extends IntrinsicElementType = 'tr'
> = OptionalComponentProp<C>;

/**
 * Table row component with additional styles & functionality, used within a table head or body.
 * See the [Table](#table) section for a full example.
 */
const TableRow: FunctionComponentOptionalComponentProp<'tr'> = (
  props: TableRowProps
) => {
  const {
    className,
    children,
    component: Component = 'tr',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-row', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(TableRow);
