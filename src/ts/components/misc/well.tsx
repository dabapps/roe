import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type WellProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Stylistic content container.
 */
export class Well extends PureComponent<WellProps, {}> {
  public render() {
    const {
      children,
      className,
      component: Component = 'div' as any,
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames(['well', className])}
      >
        {children}
      </Component>
    );
  }
}

export default Well;
