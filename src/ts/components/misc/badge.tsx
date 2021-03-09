import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';

/**
 * A badge component for displaying small pieces of information such as counts and statuses.
 */
const Badge: FunctionComponentOptionalComponentProp<'span'> = (
  props: OptionalComponentProp<'span'>
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

export default React.memo(Badge);
