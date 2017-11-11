import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type TableBodyProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Table body component with additional styles & functionality, used to contain main table content.
 */
export const TableBody: StatelessComponent<TableBodyProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'tbody',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('table-body', className)}>
      {children}
    </Component>
  );
}

export default TableBody;
