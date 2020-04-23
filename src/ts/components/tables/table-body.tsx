import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type TableBodyProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
>;

/**
 * Table body component with additional styles & functionality, used to contain main table content.
 * See the [Table](#table) section for a full example.
 */
export class TableBody<
  T extends ComponentElement = 'tbody'
> extends PureComponent<TableBodyProps<T>, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'tbody',
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
