import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface InputGroupAddonProps extends HTMLProps<HTMLDivElement> {
  component?: string;
}

export class InputGroupAddon extends PureComponent<InputGroupAddonProps, void> {
  public render () {
    const {
      children,
      className,
      width,
      style,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('input-group-addon', className)}
        style={{width, ...style}}
      >
        {children}
      </Component>
    );
  }
}
