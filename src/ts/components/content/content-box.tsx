import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export type ContentBoxProps = ComponentProps & React.HTMLProps<HTMLElement>;

/**
 * Box for displaying content within.
 */
const ContentBox = (props: ContentBoxProps) => {
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

export default React.memo(ContentBox);
