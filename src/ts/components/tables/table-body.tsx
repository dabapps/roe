import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export type TableBodyProps = ComponentProps & React.HTMLProps<HTMLElement>;

/**
 * Table body component with additional styles & functionality, used to contain main table content.
 * See the [Table](#table) section for a full example.
 */
const TableBody = (props: TableBodyProps) => {
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

export default React.memo(TableBody);
