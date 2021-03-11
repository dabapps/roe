import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type TabProps = {
  /**
   * Apply active `Tab` styles.
   */
  active?: boolean;
} & OptionalComponentPropAndHTMLAttributes;

/**
 * Tab component for use within the `Tabs` component.
 * Easily style active tabs with the `active` prop.
 * See the [Tabs](#tabs) section for a full example.
 */
const Tab = (props: TabProps) => {
  const {
    className,
    children,
    active,
    component: Component = 'li',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('tab', active && 'active', className)}
    >
      {children}
    </Component>
  );
};

export default React.memo(Tab);
