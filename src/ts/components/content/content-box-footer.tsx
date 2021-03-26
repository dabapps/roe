import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type ContentBoxFooterProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Footer for `ContentBox`s, ideal for submit buttons, links & sub-text.
 * See the [ContentBox](#contentbox) section for a full example.
 */
const ContentBoxFooter = (props: ContentBoxFooterProps) => {
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

export default React.memo(ContentBoxFooter);
