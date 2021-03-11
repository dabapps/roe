import { ResizeObserver } from '@juggle/resize-observer';
import * as classNames from 'classnames';
import * as React from 'react';

import store from '../../store';
import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type FooterProps = {
  /**
   * Fix the footer to the bottom of the window when there is not enough content to push it down.
   */
  sticky?: boolean;
  /**
   * Fix the footer to the bottom of the screen always
   */
  fixed?: boolean;
} & OptionalComponentPropAndHTMLAttributes;

const Footer = (props: FooterProps) => {
  const {
    sticky,
    fixed,
    component: Component = 'div',
    children,
    className,
    ...remainingProps
  } = props;

  const resizeObserverRef = React.useRef<ResizeObserver | null>(null);
  const [footer, setFooter] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const notifyAppRoot = () => {
      store.setState({
        hasStickyFooter: Boolean(sticky || fixed),
        footerHeight:
          footer instanceof HTMLElement
            ? footer.getBoundingClientRect().height
            : undefined,
      });
    };

    // Add/remove resize observer subscriptions when sticky or fixed changes
    if (sticky || fixed) {
      if (footer instanceof HTMLElement) {
        resizeObserverRef.current = new ResizeObserver(notifyAppRoot);
        resizeObserverRef.current.observe(footer);
      }
    } else {
      resizeObserverRef.current?.disconnect();
    }

    // Notify app root of new sticky/fixed and footer height
    notifyAppRoot();

    // Remove resize observer subscription on unmount
    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [sticky, fixed, footer]);

  React.useEffect(
    () => () => {
      store.setState({
        hasStickyFooter: false,
      });
    },
    []
  );

  const CastComponent = Component as 'div';

  return (
    <CastComponent
      {...remainingProps}
      className={classNames('footer', { sticky, fixed }, className)}
      ref={setFooter}
    >
      {children}
    </CastComponent>
  );
};

export default React.memo(Footer);
