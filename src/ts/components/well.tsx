import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface WellProps extends HTMLProps<HTMLElement> {
  component?: string;
}

export const Well: StatelessComponent<WellProps> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['well', className])}>
      {children}
    </Component>
  );
}
