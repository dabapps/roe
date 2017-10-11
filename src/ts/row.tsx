import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface RowProps extends HTMLProps<HTMLDivElement> {
  component?: string;
}

export class Row extends PureComponent<RowProps, void> {
  public render () {
    const { children, className, component: Component = 'div', ...remainingProps } = this.props;

    return (
      <Component {...remainingProps} className={classNames(['row', className])}>
        {children}
      </Component>
    );
  }
}
