import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export type BadgeProps = ComponentProps & React.HTMLProps<HTMLElement>;
/**
 * A badge component for displaying small pieces of information such as counts and statuses.
 */
const Badge = (props: BadgeProps) => {
  const {
    className,
    children,
    component: Component = 'span',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('badge', className)}>
      {children}
    </Component>
  );
};

export default React.memo(Badge);
