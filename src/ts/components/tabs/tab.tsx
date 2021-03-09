import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface TabProps {
  /**
   * Apply active `Tab` styles.
   */
  active?: boolean;
}

/**
 * Tab component for use within the `Tabs` component.
 * Easily style active tabs with the `active` prop.
 * See the [Tabs](#tabs) section for a full example.
 */
const Tab: FunctionComponentOptionalComponentProp<'li', TabProps> = (
  props: OptionalComponentProp<'li'> & TabProps
) => {
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

export default memoWithComponentProp(Tab);
