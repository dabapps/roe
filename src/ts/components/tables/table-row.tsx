import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type TableRowProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Table row component with additional styles & functionality, used within a table head or body.
 * See the [Table](#table) section for a full example.
 */
export class TableRow extends PureComponent<TableRowProps, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'tr' as any,
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('table-row', className)}
      >
        {children}
      </Component>
    );
  }
}

export default TableRow;
