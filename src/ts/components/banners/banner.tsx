import * as classNames from 'classnames';
import * as React from 'react';

import { memoWithComponentProp } from '../../utils';
import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';

export interface BannerProps {
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

/**
 * A Banner component that displays fixed to the top or bottom of the screen.
 */
const Banner: FunctionComponentOptionalComponentProp<'div', BannerProps> = (
  props: OptionalComponentProp<'div'> & BannerProps
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

export default memoWithComponentProp(Banner);
