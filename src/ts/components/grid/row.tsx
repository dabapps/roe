import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type RowProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used within a container, section, or column, to keep content on separate rows.
 */
export const Row: StatelessComponent<RowProps> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['row', className])}>
      {children}
    </Component>
  );
}

export default Row;
