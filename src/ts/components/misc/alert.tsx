import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type AlertProps<T extends ComponentElement> = ComponentAndHTMLProps<T>;

/**
 * A component for applying various styles to text, ideal for info, success, and error messages.
 */
export class Alert<T extends ComponentElement = 'div'> extends PureComponent<
  AlertProps<T>,
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
        className={classNames(['alert', className])}
      >
        {children}
      </Component>
    );
  }
}

export default Alert;
