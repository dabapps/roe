import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../types';

export type WellProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Stylistic content container.
 */
export const Well: StatelessComponent<WellProps> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['well', className])}>
      {children}
    </Component>
  );
}

export default Well;
