import * as classNames from 'classnames';
import * as React from 'react';

import { NBSP } from '../../constants';
import {
  TableCellPropsBase,
  OptionalComponentPropAndHTMLAttributes,
} from '../../types';
import { shouldNotBeRendered } from '../../utils';

export type TableHeaderProps = TableCellPropsBase &
  React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  OptionalComponentPropAndHTMLAttributes;

/**
 * Table header component with additional styles & functionality, used to style and or fix table headers.
 * See the [Table](#table) section for a full example.
 */
const TableHeader = (props: TableHeaderProps) => {
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

export default React.memo(TableHeader);
