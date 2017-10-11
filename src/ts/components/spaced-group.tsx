import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface SpacedGroupProps extends HTMLProps<HTMLElement> {
  component?: string;
  block?: boolean;
  small?: boolean;
  large?: boolean;
}

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
