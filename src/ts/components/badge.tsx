import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../types';

export type BadgeProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Badge Component
 */
export class Badge extends PureComponent<BadgeProps, {}> {
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
