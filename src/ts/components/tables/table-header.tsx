import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { NBSP } from '../../constants';
import { BaseTableCellProps } from '../../types';
import { shouldNotBeRendered } from '../../utils';

export type TableHeaderProps = BaseTableCellProps & HTMLProps<HTMLElement>;

/**
 * Table header component with additional styles & functionality, used to style and or fix table headers.
 * See the [Table](#table) section for a full example.
 */
export class TableHeader extends PureComponent<TableHeaderProps, {}> {
  public render() {
    const {
      className,
      children,
      style,
      width,
      component: Component = 'th',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('table-header', className)}
        style={{ width, maxWidth: width, minWidth: width, ...style }}
      >
        {shouldNotBeRendered(children) ? NBSP : children}
      </Component>
    );
  }
}

export default TableHeader;
