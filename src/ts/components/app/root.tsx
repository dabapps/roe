import * as classNames from 'classnames';
import * as React from 'react';

import store, { StoreState } from '../../store';
import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type AppRootProps = OptionalComponentPropAndHTMLAttributes;

export type AppRootState = Pick<
  StoreState,
  'hasStickyFooter' | 'hasFixedNavBar' | 'navBarHeight' | 'footerHeight'
>;

/**
 * This is the most important part of your app.
 * This component interacts with other Roe components to adjust styles at the root level.
 * Your app must have an AppRoot if you wish to used a fixed / shy NavBar or sticky Footer.
 *
 * If your app is rendered inside another element directly within the body,
 * this element **MUST** have the "app" class applied.
 *
 * The "app" class ensures that the AppRoot is not affected by the outer, non-react element.
 */
const AppRoot = (props: AppRootProps) => {
  const {
    component: Component = 'div',
    children,
    className,
    ...remainingProps
  } = props;

  const {
    hasStickyFooter,
    hasFixedNavBar,
    navBarHeight,
    footerHeight,
  } = store.useState();

  const myClassNames = [
    'app-root',
    (hasStickyFooter && 'has-sticky-footer') || null,
    (hasFixedNavBar && 'has-fixed-nav-bar') || null,
    className,
  ];

  const style = {
    paddingTop: hasFixedNavBar ? navBarHeight : undefined,
    paddingBottom: hasStickyFooter ? footerHeight : undefined,
  };

  return (
    <Component
      {...remainingProps}
      className={classNames(myClassNames)}
      style={style}
    >
      {children}
    </Component>
  );
};

export default React.memo(AppRoot);
