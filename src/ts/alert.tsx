import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface AlertProps extends HTMLProps<HTMLDivElement> {
  component?: string;
}

export class Alert extends PureComponent<AlertProps, void> {
  public render () {
    const { children, className, component: Component = 'div', ...remainingProps } = this.props;

    return (
      <Component {...remainingProps} className={classNames(['alert', className])}>
        {children}
      </Component>
    );
  }
}
