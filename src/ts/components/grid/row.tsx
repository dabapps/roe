import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type RowProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Used within a container, section, or column, to keep content on separate rows.
 * Row exists to allow columns to sit within a container / other column and be
 * spaced from each other without adding additional padding to the outsides.
 * It does this by using negative margin left and right. Additionally Row has
 * a clearfix applied which allows floated elements to be placed inside it
 * without it collapsing.
 */
const Row = (props: RowProps) => {
  const {
    children,
    className,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames(['row', className])}>
      {children}
    </Component>
  );
};

export default React.memo(Row);
