import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type NavProps<
  C extends IntrinsicElementType = 'ul'
> = OptionalComponentProp<C>;

/**
 * Used to group NavItems inside a NavBar or SideBar.
 * You should use the atomic display classes e.g. `"display-none md-display-block"`
 * to hide the nav and replace it with a menu button (for controlling the SideBar) on smaller screens.
 * The same Nav can be used in both a NavBar and SideBar, and will automatically style itself sensibly.
 */
const Nav: FunctionComponentOptionalComponentProp<'ul'> = (props: NavProps) => {
  const {
    className,
    children,
    component: Component = 'ul',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('nav', className)}>
      {children}
    </Component>
  );
};

const NavMemo = memoWithComponentProp(Nav);

export { NavMemo as Nav };

export default NavMemo;
