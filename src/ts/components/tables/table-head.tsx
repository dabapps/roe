import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export type TableHeadProps = ComponentProps & React.HTMLProps<HTMLElement>;

/**
 * Table head component with additional styles & functionality, used to contain table headers.
 * See the [Table](#table) section for a full example.
 */
const TableHead = (props: TableHeadProps) => {
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

export default React.memo(TableHead);
