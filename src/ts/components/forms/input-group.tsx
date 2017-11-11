import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export interface InputGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
  block?: boolean;
}

/**
 * Used to group inputs, selects, buttons, and `InputGroupAddon`s.
 */
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

export default InputGroup;
