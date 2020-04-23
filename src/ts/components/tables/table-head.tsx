import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type TableHeadProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Table head component with additional styles & functionality, used to contain table headers.
 * See the [Table](#table) section for a full example.
 */
export class TableHead extends PureComponent<TableHeadProps, {}> {
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
