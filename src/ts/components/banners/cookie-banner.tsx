import * as classNames from 'classnames';
import * as cookie from 'cookie';
import * as React from 'react';

import { ComponentProps } from '../../types';
import Banner from './banner';

export interface CookieBannerRenderProps {
  dismiss: () => void;
}

export type Render = (
  props: CookieBannerRenderProps
) => // eslint-disable-next-line @typescript-eslint/no-explicit-any
React.ReactElement<any>;

export interface CookieBannerProps
  extends ComponentProps,
    React.HTMLProps<HTMLElement> {
  /**
   * Takes a component as a function and renders as a child
   */
  render: Render;
  /**
   * Positions the element at the 'top' or 'bottom' of the screen
   * @default 'bottom'
   */
  position?: 'top' | 'bottom';
}

/**
 * A [Banner](#banner) component that is permanently dismissed after setting a cookie.
 * This component takes a render prop, which can be a component or function, that is passed a dismiss prop
 * which you can then apply as an onClick prop to an element of your choice.
 */
const CookieBanner = (props: CookieBannerProps) => {
  const [dismissed, setDismissed] = React.useState<boolean>();

  const setCookie = () => {
    document.cookie = cookie.serialize('cookies-accepted', 'true');
    setDismissed(true);
  };

  React.useEffect(() => {
    setDismissed(Boolean(cookie.parse(document.cookie)['cookies-accepted']));
  }, []);

  const {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    children,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    ref,
    className,
    render,
    position = 'bottom',
    ...remainingProps
  } = props;

  return (
    <Banner
      {...remainingProps}
      position={position}
      open={!dismissed}
      className={classNames('cookie-banner', className)}
    >
      {render && render({ dismiss: setCookie })}
    </Banner>
  );
};

export default React.memo(CookieBanner);
