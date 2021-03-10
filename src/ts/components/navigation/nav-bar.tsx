import { ResizeObserver } from '@juggle/resize-observer';
import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

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

export type NavBarProps<C extends IntrinsicElementType> = OptionalComponentProp<
  C
> &
  NavBarPropsBase;

export interface NavBarState {
  hidden: boolean;
}

const NavBar: FunctionComponentOptionalComponentProp<'div', NavBarPropsBase> = (
  props: NavBarProps<'div'>
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

  const navBarElement = React.useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = React.useState<boolean>(false);
  const [mountTime] = React.useState<number>(new Date().getTime());
  const [previousScrollY, setPreviousScrollY] = React.useState<number>(
    getScrollOffset().y
  );

  const notifyAppRoot = React.useCallback((prop: NavBarProps<'div'>) => {
    const { fixed: isFixed, shy: isShy } = prop;

    const element = ReactDOM.findDOMNode(navBarElement.current);

    store.setState({
      hasFixedNavBar: Boolean(isFixed || isShy),
      navBarHeight:
        element && element instanceof HTMLElement
          ? element.getBoundingClientRect().height
          : undefined,
    });
  }, []);

  const updateAppRoot = () => notifyAppRoot(props);

  // tslint:disable-next-line:member-ordering
  const resizeObserver = new ResizeObserver(updateAppRoot);

  const toggleResizeListeners = React.useCallback(
    (prop: NavBarProps<'div'>) => {
      const { fixed: isFixed, shy: isShy } = prop;

      if (isFixed || isShy) {
        const element = ReactDOM.findDOMNode(navBarElement.current);
        if (element instanceof HTMLElement) {
          resizeObserver.observe(element);
        }
      } else {
        resizeObserver.disconnect();
      }
    },
    [resizeObserver]
  );

  const hideOrShowNavBar = React.useCallback(() => {
    const { y } = getScrollOffset();

    if (
      typeof mountTime === 'undefined' ||
      new Date().getTime() < mountTime + 250
    ) {
      setPreviousScrollY(y);
      return;
    }

    const element = ReactDOM.findDOMNode(navBarElement.current);

    if (element && element instanceof HTMLElement) {
      const { height } = element.getBoundingClientRect();

      if (y > previousScrollY + height / 2 && y > height) {
        setHidden(true);
        setPreviousScrollY(y);
      } else if (y < previousScrollY - height / 2) {
        setHidden(false);
        setPreviousScrollY(y);
      }
    }
  }, [previousScrollY, mountTime]);

  const toggleShyListeners = React.useCallback(
    (prop: NavBarProps<'div'>) => {
      const { shy: isShy } = prop;

      if (isShy) {
        window.addEventListener('scroll', hideOrShowNavBar);
        window.addEventListener('resize', hideOrShowNavBar);
      } else {
        window.removeEventListener('scroll', hideOrShowNavBar);
        window.removeEventListener('resize', hideOrShowNavBar);
      }
    },
    [hideOrShowNavBar]
  );

  React.useEffect(() => {
    notifyAppRoot(props);
    toggleShyListeners(props);
    toggleResizeListeners(props);

    return () => {
      window.removeEventListener('scroll', hideOrShowNavBar);
      window.removeEventListener('resize', hideOrShowNavBar);
      resizeObserver.disconnect();
      notifyAppRoot({ fixed: false });
    };
  });

  React.useEffect(() => {
    const { fixed: isFixed, shy: isShy } = props;
    toggleResizeListeners({ fixed: isFixed, shy: isShy });
    toggleShyListeners({ shy: isShy });

    notifyAppRoot(props);
  }, [
    fixed,
    shy,
    toggleShyListeners,
    notifyAppRoot,
    props,
    toggleResizeListeners,
  ]);

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
      ref={navBarElement}
      {...remainingProps}
      className={classNames(myClassNames)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(NavBar);
