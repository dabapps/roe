import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type AlertProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C>;

/**
 * A component for applying various styles to text, ideal for info, success, and error messages.
 */
const Alert: FunctionComponentOptionalComponentProp<'div'> = (
  props: AlertProps
) => {
  const {
    children,
    className,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames(['alert', className])}>
      {children}
    </Component>
  );
};

export default memoWithComponentProp(Alert);
