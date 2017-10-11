import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface AlertProps extends HTMLProps<HTMLElement> {
  component?: string;
}

export const Alert: StatelessComponent<AlertProps> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['alert', className])}>
      {children}
    </Component>
  );
}
