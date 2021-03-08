import { ResizeObserver } from '@juggle/resize-observer';
import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import store from '../../store';
import { ComponentProps } from '../../types';

export interface FooterProps
  extends ComponentProps,
    React.HTMLProps<HTMLElement> {
  /**
   * Fix the footer to the bottom of the window when there is not enough content to push it down.
   */
  sticky?: boolean;
  /**
   * Fix the footer to the bottom of the screen always
   */
  fixed?: boolean;
}

const Footer = (props: FooterProps) => {
  const {
    sticky,
    fixed,
    component: Component = 'div',
    children,
    className,
    ...remainingProps
  } = props;

  const footerElement = React.useRef<null | HTMLElement>(null);

  const notifyAppRoot = React.useCallback((prop: FooterProps) => {
    const { sticky: isSticky, fixed: isFixed } = prop;
    const element = ReactDOM.findDOMNode(footerElement.current);

    store.setState({
      hasStickyFooter: Boolean(isSticky || isFixed),
      footerHeight:
        element && element instanceof HTMLElement
          ? element.getBoundingClientRect().height
          : undefined,
    });
  }, []);

  const updateAppRoot = React.useCallback(() => notifyAppRoot(props), [
    notifyAppRoot,
    props,
  ]);

  // tslint:disable-next-line:member-ordering
  const resizeObserver = new ResizeObserver(updateAppRoot);

  const toggleResizeListeners = React.useCallback(() => {
    if (sticky || fixed) {
      const element = ReactDOM.findDOMNode(footerElement.current);
      if (element instanceof HTMLElement) {
        resizeObserver.observe(element);
      }
    } else {
      resizeObserver.disconnect();
    }
  }, [resizeObserver, sticky, fixed]);

  React.useEffect(() => {
    notifyAppRoot(props);
    toggleResizeListeners();

    return () => {
      resizeObserver.disconnect();
      notifyAppRoot({ sticky: false });
    };
  }, [notifyAppRoot, toggleResizeListeners, resizeObserver, props]);

  return (
    <Component
      {...remainingProps}
      className={classNames('footer', { sticky, fixed }, className)}
      ref={footerElement}
    >
      {children}
    </Component>
  );
};

export default React.memo(Footer);
