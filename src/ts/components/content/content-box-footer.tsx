import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type ContentBoxFooterProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C>;

/**
 * Footer for `ContentBox`s, ideal for submit buttons, links & sub-text.
 * See the [ContentBox](#contentbox) section for a full example.
 */
const ContentBoxFooter: FunctionComponentOptionalComponentProp<'div'> = (
  props: ContentBoxFooterProps
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

const ContentBoxFooterMemo = memoWithComponentProp(ContentBoxFooter);

export { ContentBoxFooterMemo as ContentBoxFooter };

export default ContentBoxFooterMemo;
