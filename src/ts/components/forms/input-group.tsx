import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface InputGroupProps extends HTMLProps<HTMLElement> {
  component?: string;
  block?: boolean;
}

export const InputGroup: StatelessComponent<InputGroupProps> = (props) => {
  const {
    children,
    className,
    block,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const myClassNames = [
    'input-group',
    block ? 'block' : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}
