import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export type AlertProps = ComponentProps & React.HTMLProps<HTMLElement>;

/**
 * A component for applying various styles to text, ideal for info, success, and error messages.
 */
const Alert = (props: AlertProps) => {
  const {
    children,
    className,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames(['alert', className])}>
      {children}
    </Component>
  );
};

export default React.memo(Alert);
