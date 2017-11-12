import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export interface ContainerProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Fill parent with no media queries to affect width.
   */
  fluid?: boolean;
  /**
   * Allows applying a background color with `@container-background` variable.
   */
  solid?: boolean;
}

/**
 * Used inside `NavBar`s or as the main wrapper for an application.
 */
export const Container: StatelessComponent<ContainerProps> = (props) => {
  const { children, className, fluid, solid, component: Component = 'div', ...remainingProps } = props;
  const fluidClassName = fluid ? 'container-fluid' : 'container';
  const solidClassName = solid && 'solid';

  return (
    <Component {...remainingProps} className={classNames(fluidClassName, solidClassName, className)}>
      {children}
    </Component>
  );
}

export default Container;
