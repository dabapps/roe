import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type TabsProps<
  C extends IntrinsicElementType = 'ul'
> = OptionalComponentProp<C>;

/**
 * Used to contain a set of `Tab` components.
 */
const Tabs: FunctionComponentOptionalComponentProp<'ul'> = (
  props: TabsProps
) => {
  const {
    className,
    children,
    component: Component = 'ul',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('tabs', className)}>
      {children}
    </Component>
  );
};

export default memoWithComponentProp(Tabs);
