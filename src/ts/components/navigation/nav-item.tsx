import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface NavItemPropsBase {
  /**
   * Apply an active class to the NavItem
   */
  active?: boolean;
}

export type NavItemProps<
  C extends IntrinsicElementType
> = OptionalComponentProp<C> & NavItemPropsBase;

/**
 * NavItems are used inside of a Nav. These already have basic hover styles applied.
 * You should **always** nest an `<a>` inside a NavItem. This is not part of the component so that you can use other
 * components in place of an `<a>`, such as a React Router link (which renders an `<a>` also).
 * These can have an active class applied to them to highlight the currently active page.
 * You may apply `button` and related classes to a NavItem e.g. for a logout button.
 * See the [Nav](#nav) section for a full example.
 */
const NavItem: FunctionComponentOptionalComponentProp<
  'li',
  NavItemPropsBase
> = (props: NavItemProps<'li'>) => {
  const { className, children, active, component: Component = 'li' } = props;

  return (
    <Component
      className={classNames('nav-item', active && 'active', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(NavItem);
