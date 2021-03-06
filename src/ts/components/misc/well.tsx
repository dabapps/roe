import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type WellProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Stylistic content container.
 */
const Well = (props: WellProps) => {
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

export default React.memo(Well);
