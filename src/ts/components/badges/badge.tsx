import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface BadgeProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Make the Badge small
   */
  small?: boolean;
  /**
   * Make the Badge large
   */
  large?: boolean;
}

/**
 * Badge Component
 */
export class Badge extends PureComponent<BadgeProps, {}> {
  public render() {
    const {
      className,
      small,
      large,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames(
          'badge',
          small ? 'small' : null,
          large ? 'large' : null,
          className
        )}
      >
        {children}
      </Component>
    );
  }
}

export default Badge;
