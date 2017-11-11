import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export interface TabProps extends ComponentProps, HTMLProps<HTMLElement> {
  active?: boolean;
}

/**
 * Tab component for use within the `Tabs` component.
 * Easily style active tabs with the `active` prop.
 */
export const Tab: StatelessComponent<TabProps> = (props) => {
  const {
    className,
    children,
    active,
    component: Component = 'li',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('tab', active && 'active', className)}>
      {children}
    </Component>
  );
}

export default Tab;
