import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Table body component with additional styles & functionality, used to contain main table content.
 * See the [Table](#table) section for a full example.
 */
const TableBody: FunctionComponentOptionalComponentProp<'tbody'> = (
  props: OptionalComponentProp<'tbody'>
) => {
  const {
    className,
    children,
    component: Component = 'tbody',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-body', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(TableBody);
