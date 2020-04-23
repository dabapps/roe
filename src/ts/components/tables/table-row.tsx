import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type TableRowProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
>;

/**
 * Table row component with additional styles & functionality, used within a table head or body.
 * See the [Table](#table) section for a full example.
 */
export class TableRow<T extends ComponentElement = 'tr'> extends PureComponent<
  TableRowProps<T>,
  {}
> {
  public render() {
    const {
      className,
      children,
      component: Component = 'tr',
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
