import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type TableHeadProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
>;

/**
 * Table head component with additional styles & functionality, used to contain table headers.
 * See the [Table](#table) section for a full example.
 */
export class TableHead<
  T extends ComponentElement = 'thead'
> extends PureComponent<TableHeadProps<T>, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'thead',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('table-head', className)}
      >
        {children}
      </Component>
    );
  }
}

export default TableHead;
