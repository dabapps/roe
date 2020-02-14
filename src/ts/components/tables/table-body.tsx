import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type TableBodyProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Table body component with additional styles & functionality, used to contain main table content.
 * See the [Table](#table) section for a full example.
 */
export class TableBody extends PureComponent<TableBodyProps, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'tbody' as any,
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('table-body', className)}
      >
        {children}
      </Component>
    );
  }
}

export default TableBody;
