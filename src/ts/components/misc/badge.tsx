import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type BadgeProps<T extends ComponentElement> = ComponentAndHTMLProps<T>;
/**
 * A badge component for displaying small pieces of information such as counts and statuses.
 */
export class Badge<T extends ComponentElement = 'span'> extends PureComponent<
  BadgeProps<T>,
  {}
> {
  public render() {
    const {
      className,
      children,
      component: Component = 'span',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('badge', className)}>
        {children}
      </Component>
    );
  }
}

export default Badge;
