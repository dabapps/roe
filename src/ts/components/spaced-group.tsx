import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../types';

export interface SpacedGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
  block?: boolean;
  small?: boolean;
  large?: boolean;
}

/**
 * Component to contain & automatically add space between inline elements.
 */
export const SpacedGroup: StatelessComponent<SpacedGroupProps> = (props) => {
  const {
    children,
    className,
    block,
    small,
    large,
    component: Component = 'span',
    ...remainingProps
  } = props;

  const myClassNames = [
    'spaced-group',
    block ? 'block' : null,
    small ? 'small' : null,
    large ? 'large' : null,
    className
  ]

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}

export default SpacedGroup;
