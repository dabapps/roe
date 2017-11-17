import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type TabsProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used to contain a set of `Tab` components.
 */
export const Tabs: StatelessComponent<TabsProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'ul',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('tabs', className)}>
      {children}
    </Component>
  );
}

export default Tabs;
