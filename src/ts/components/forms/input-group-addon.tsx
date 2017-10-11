import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface InputGroupAddonProps extends HTMLProps<HTMLElement> {
  component?: string;
}

export const InputGroupAddon: StatelessComponent<InputGroupAddonProps> = (props) => {
  const {
    children,
    className,
    width,
    style,
    component: Component = 'div',
    ...remainingProps
  } = props;

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

export default InputGroupAddon;
