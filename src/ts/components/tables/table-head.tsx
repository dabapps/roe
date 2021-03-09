import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Table head component with additional styles & functionality, used to contain table headers.
 * See the [Table](#table) section for a full example.
 */
const TableHead: FunctionComponentOptionalComponentProp<'thead'> = (
  props: OptionalComponentProp<'thead'>
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

export default memoWithComponentProp(TableHead);
