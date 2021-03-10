import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface TabPropsBase {
  /**
   * Apply active `Tab` styles.
   */
  active?: boolean;
}

export type TabProps<
  C extends IntrinsicElementType = 'li'
> = OptionalComponentProp<C> & TabPropsBase;

/**
 * Tab component for use within the `Tabs` component.
 * Easily style active tabs with the `active` prop.
 * See the [Tabs](#tabs) section for a full example.
 */
const Tab: FunctionComponentOptionalComponentProp<'li', TabPropsBase> = (
  props: TabProps
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

const TabMemo = memoWithComponentProp(Tab);

export { TabMemo as Tab };

export default TabMemo;
