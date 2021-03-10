import * as classNames from 'classnames';
import * as React from 'react';

import { memoWithComponentProp } from '../../utils';
import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';

export interface BannerPropsBase {
  /**
   * If set, displays the component, otherwise it is hidden
   * @default true
   */
  open?: boolean;
  /**
   * Positions the element at the 'top' or 'bottom' of the screen
   * @default 'bottom'
   */
  position?: 'top' | 'bottom';
}

export type BannerProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & BannerPropsBase;

/**
 * A Banner component that displays fixed to the top or bottom of the screen.
 */
const Banner: FunctionComponentOptionalComponentProp<'div', BannerPropsBase> = (
  props: BannerProps
): React.ReactElement => {
  const {
    className,
    children,
    open = true,
    position = 'bottom',
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('banner', open && 'open', position, className)}
    >
      {children}
    </Component>
  );
};

const BannerMemo = memoWithComponentProp(Banner);

export { BannerMemo as Banner };

export default BannerMemo;
