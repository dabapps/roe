import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Footer for `ContentBox`s, ideal for submit buttons, links & sub-text.
 * See the [ContentBox](#contentbox) section for a full example.
 */
const ContentBoxFooter: FunctionComponentOptionalComponentProp<'div'> = (
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
      className={classNames('content-box-footer', className)}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(ContentBoxFooter);
