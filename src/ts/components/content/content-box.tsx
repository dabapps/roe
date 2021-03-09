import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Box for displaying content within.
 */
const ContentBox: FunctionComponentOptionalComponentProp<'div'> = (
  props: OptionalComponentProp<'div'>
) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('content-box', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(ContentBox);
