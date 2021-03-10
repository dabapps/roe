import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface ContainerPropsBase {
  /**
   * Fill parent with no media queries to affect width.
   */
  fluid?: boolean;
  /**
   * Allows applying a background color with `@container-background` variable.
   */
  solid?: boolean;
}

export type ContainerProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & ContainerPropsBase;

/**
 * Used inside `NavBar`s or as the main wrapper for an application.
 */
const Container: FunctionComponentOptionalComponentProp<
  'div',
  ContainerPropsBase
> = (props: ContainerProps) => {
  const {
    children,
    className,
    fluid,
    solid,
    component: Component = 'div',
    ...remainingProps
  } = props;

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
};

export default memoWithComponentProp(Container);
