import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type ContentBoxProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C>;

/**
 * Box for displaying content within.
 */
const ContentBox: FunctionComponentOptionalComponentProp<'div'> = (
  props: ContentBoxProps
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

const ContentBoxMemo = memoWithComponentProp(ContentBox);

export { ContentBoxMemo as ContentBox };

export default ContentBoxMemo;
