import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type BadgeProps<C extends IntrinsicElementType> = OptionalComponentProp<
  C
>;

/**
 * A badge component for displaying small pieces of information such as counts and statuses.
 */
const Badge: FunctionComponentOptionalComponentProp<'span'> = (
  props: BadgeProps<'span'>
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

export default memoWithComponentProp(Badge);
