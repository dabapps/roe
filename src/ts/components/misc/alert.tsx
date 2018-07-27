import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type AlertProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * A component for applying various styles to text, ideal for info, success, and error messages.
 */
export class Alert extends PureComponent<AlertProps, {}> {
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
        className={classNames(['alert', className])}
      >
        {children}
      </Component>
    );
  }
}

export default Alert;
