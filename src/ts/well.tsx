import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface WellProps extends HTMLProps<HTMLDivElement> {
  component?: string;
}

export class Well extends PureComponent<WellProps, void> {
  public render () {
    const { children, className, component: Component = 'div', ...remainingProps } = this.props;

    return (
      <Component {...remainingProps} className={classNames(['well', className])}>
        {children}
      </Component>
    );
  }
}
