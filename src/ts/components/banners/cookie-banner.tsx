import * as classNames from 'classnames';
import * as cookie from 'cookie';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import Banner from './banner';
import { memoWithComponentProp } from '../../utils';

export interface CookieBannerRenderProps {
  dismiss: () => void;
}

export type Render = (
  props: CookieBannerRenderProps
) => React.ReactElement<Record<string, unknown>>;

export interface CookieBannerPropsBase {
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

export type CookieBannerProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & CookieBannerPropsBase;

/**
 * A [Banner](#banner) component that is permanently dismissed after setting a cookie.
 * This component takes a render prop, which can be a component or function, that is passed a dismiss prop
 * which you can then apply as an onClick prop to an element of your choice.
 */
const CookieBanner: FunctionComponentOptionalComponentProp<
  'div',
  CookieBannerPropsBase
> = (props: CookieBannerProps) => {
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
    component = 'div',
    ...remainingProps
  } = props;

  return (
    <Banner
      {...remainingProps}
      component={component}
      position={position}
      open={!dismissed}
      className={classNames('cookie-banner', className)}
    >
      {render && render({ dismiss: setCookie })}
    </Banner>
  );
};

const CookieBannerMemo = memoWithComponentProp(CookieBanner);

export { CookieBannerMemo as CookieBanner };

export default CookieBannerMemo;
