import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ContainerProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
  /**
   * Fill parent with no media queries to affect width.
   */
  fluid?: boolean;
  /**
   * Allows applying a background color with `@container-background` variable.
   */
  solid?: boolean;
};

/**
 * Used inside `NavBar`s or as the main wrapper for an application.
 */
export class Container<
  T extends ComponentElement = 'div'
> extends PureComponent<ContainerProps<T>, {}> {
  public render() {
    const {
      children,
      className,
      fluid,
      solid,
      component: Component = 'div',
      ...remainingProps
    } = this.props;
    const fluidClassName = fluid ? 'container-fluid' : 'container';
    const solidClassName = solid && 'solid';

    return (
      <Component
        {...remainingProps}
        className={classNames(fluidClassName, solidClassName, className)}
      >
        {children}
      </Component>
    );
  }
}

export default Container;
