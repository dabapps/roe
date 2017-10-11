import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  component?: string;
  fluid?: boolean;
  solid?: boolean;
  children?: React.ReactNode;
}

export class Container extends PureComponent<ContainerProps, void> {
  public render () {
    const { children, className, fluid, solid, component: Component = 'div', ...remainingProps } = this.props;
    const fluidClassName = fluid ? 'container-fluid' : 'container';
    const solidClassName = solid && 'solid';

    return (
      <Component {...remainingProps} className={classNames(fluidClassName, solidClassName, className)}>
        {children}
      </Component>
    );
  }
}
