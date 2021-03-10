import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type BadgeProps<
  C extends IntrinsicElementType = 'span'
> = OptionalComponentProp<C>;

/**
 * A badge component for displaying small pieces of information such as counts and statuses.
 */
const Badge: FunctionComponentOptionalComponentProp<'span'> = (
  props: BadgeProps
) => {
  const {
    className,
    children,
    component: Component = 'span',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('badge', className)}>
      {children}
    </Component>
  );
};

const BadgeMemo = memoWithComponentProp(Badge);

export { BadgeMemo as Badge };

export default BadgeMemo;
