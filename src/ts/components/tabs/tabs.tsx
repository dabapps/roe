import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';

/**
 * Used to contain a set of `Tab` components.
 */
const Tabs: FunctionComponentOptionalComponentProp<'ul'> = (
  props: OptionalComponentProp<'ul'>
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

export default React.memo(Tabs);
