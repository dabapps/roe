import { ResizeObserver } from '@juggle/resize-observer';
import * as classNames from 'classnames';
import * as React from 'react';

import store from '../../store';
import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { getScrollOffset, memoWithComponentProp } from '../../utils';

export interface NavBarPropsBase {
  /**
   * Fix the navbar to the top of the screen
   */
  fixed?: boolean;
  /**
   * Hide the navbar when scrolling down, but display when scrolling up
   */
  shy?: boolean;
  /**
   * Remove NavBar shadow
   */
  noShadow?: boolean;
}

export type NavBarProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & NavBarPropsBase;

export interface NavBarState {
  hidden: boolean;
}

const NavBar: FunctionComponentOptionalComponentProp<'div', NavBarPropsBase> = (
  props: NavBarProps
) => {
  const {
    children,
    className,
    fixed,
    shy,
    noShadow,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const resizeObserverRef = React.useRef<ResizeObserver | null>(null);
  const previousScrollYRef = React.useRef(getScrollOffset().y);
  const mountTimeRef = React.useRef<number>();
  const [hidden, setHidden] = React.useState(false);
  const [navBar, setNavBar] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const notifyAppRoot = () => {
      store.setState({
        hasFixedNavBar: Boolean(shy || fixed),
        navBarHeight:
          navBar instanceof HTMLElement
            ? navBar.getBoundingClientRect().height
            : undefined,
      });
    };

    const hideOrShowNavBar = () => {
      const { y } = getScrollOffset();

      if (
        typeof mountTimeRef.current === 'undefined' ||
        new Date().getTime() < mountTimeRef.current + 250
      ) {
        previousScrollYRef.current = y;
        return;
      }

      if (navBar instanceof HTMLElement) {
        const { height } = navBar.getBoundingClientRect();

        if (y > previousScrollYRef.current + height / 2 && y > height) {
          setHidden(true);

          previousScrollYRef.current = y;
        } else if (y < previousScrollYRef.current - height / 2) {
          setHidden(false);

          previousScrollYRef.current = y;
        }
      }
    };

    // Add/remove resize observer subscriptions when sticky or fixed changes
    if (shy || fixed) {
      if (navBar instanceof HTMLElement) {
        resizeObserverRef.current = new ResizeObserver(notifyAppRoot);
        resizeObserverRef.current.observe(navBar);
      }
    } else {
      resizeObserverRef.current?.disconnect();
    }

    // Notify app root of new shy/fixed and nav bar height
    notifyAppRoot();

    // Subscribe/unsubscribe from scroll/resize
    if (shy) {
      window.addEventListener('scroll', hideOrShowNavBar);
      window.addEventListener('resize', hideOrShowNavBar);
    } else {
      window.removeEventListener('scroll', hideOrShowNavBar);
      window.removeEventListener('resize', hideOrShowNavBar);
    }

    // Remove listeners on unmount
    return () => {
      resizeObserverRef.current?.disconnect();
      window.removeEventListener('scroll', hideOrShowNavBar);
      window.removeEventListener('resize', hideOrShowNavBar);
    };
  }, [shy, fixed, navBar]);

  React.useEffect(() => {
    mountTimeRef.current = new Date().getTime();

    return () => {
      store.setState({
        hasFixedNavBar: false,
      });
    };
  }, []);

  const myClassNames = [
    'nav-bar',
    fixed || shy ? 'fixed' : null,
    shy ? 'shy' : null,
    hidden ? 'hidden' : null,
    noShadow ? 'no-shadow' : null,
    className,
  ];

  return (
    <Component
      ref={setNavBar}
      {...remainingProps}
      className={classNames(myClassNames)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(NavBar);
