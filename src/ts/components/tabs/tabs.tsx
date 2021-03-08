import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export type TabsProps = ComponentProps & React.HTMLProps<HTMLElement>;

/**
 * Used to contain a set of `Tab` components.
 */
const Tabs = (props: TabsProps) => {
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
};

export default React.memo(Tabs);
