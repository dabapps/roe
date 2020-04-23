import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type WellProps<T extends ComponentElement> = ComponentAndHTMLProps<T>;

/**
 * Stylistic content container.
 */
export class Well<T extends ComponentElement = 'div'> extends PureComponent<
  WellProps<T>,
  {}
> {
  public render() {
    const {
      children,
      className,
      component: Component = 'div',
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
