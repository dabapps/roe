import { ResizeObserver } from '@juggle/resize-observer';
import * as classNames from 'classnames';
import * as React from 'react';

import store from '../../store';
import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface FooterPropsBase {
  /**
   * Fix the footer to the bottom of the window when there is not enough content to push it down.
   */
  sticky?: boolean;
  /**
   * Fix the footer to the bottom of the screen always
   */
  fixed?: boolean;
}

export type FooterProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & FooterPropsBase;

const Footer: FunctionComponentOptionalComponentProp<'div', FooterPropsBase> = (
  props: FooterProps
) => {
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
    // Add/remove resize observer subscriptions when sticky or fixed changes
    if (sticky || fixed) {
      if (footer instanceof HTMLElement) {
        resizeObserverRef.current = new ResizeObserver(() => {
          store.setState({
            hasStickyFooter: Boolean(sticky || fixed),
            footerHeight:
              footer instanceof HTMLElement
                ? footer.getBoundingClientRect().height
                : undefined,
          });
        });
        resizeObserverRef.current.observe(footer);
      }
    } else {
      resizeObserverRef.current?.disconnect();
    }

    // Remove resize observer subscription on unmount
    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [sticky, fixed, footer]);

  return (
    <Component
      {...remainingProps}
      className={classNames('footer', { sticky, fixed }, className)}
      ref={setFooter}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(Footer);
