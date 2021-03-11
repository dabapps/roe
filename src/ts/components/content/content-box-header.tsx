import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type ContentBoxHeaderProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Header for `ContentBox`s, used to display a content's title.
 * See the [ContentBox](#contentbox) section for a full example.
 */
const ContentBoxHeader = (props: ContentBoxHeaderProps) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('content-box-header', className)}
    >
      {children}
    </Component>
  );
};

export default React.memo(ContentBoxHeader);
