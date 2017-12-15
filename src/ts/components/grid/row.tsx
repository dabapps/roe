import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type RowProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used within a container, section, or column, to keep content on separate rows.
 */
export class Row extends PureComponent<RowProps, {}> {
  public render () {
    const {
      children,
      className,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames(['row', className])}>
        {children}
      </Component>
    );
  }
}

export default Row;
