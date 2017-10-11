import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface FormGroupProps extends HTMLProps<HTMLElement> {
  component?: string;
  block?: boolean;
}

export const FormGroup: StatelessComponent<FormGroupProps> = (props) => {
  const {
    children,
    className,
    block,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const myClassNames = [
    'form-group',
    block ? 'block' : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}
