import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Stylistic content container.
 */
const Well: FunctionComponentOptionalComponentProp<'div'> = (
  props: OptionalComponentProp<'div'>
) => {
  const {
    children,
    className,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames(['well', className])}>
      {children}
    </Component>
  );
};

export default memoWithComponentProp(Well);
