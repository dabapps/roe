import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface RowProps extends HTMLProps<HTMLElement> {
  component?: string;
}

export const Row: StatelessComponent<RowProps> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['row', className])}>
      {children}
    </Component>
  );
}

export default Row;
