import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export interface FormGroupProps
  extends ComponentProps,
    React.HTMLProps<HTMLElement> {
  /**
   * Set the style `display: block;` with label above input.
   */
  block?: boolean;
  /**
   * Offset the input, select, etc as if there was a label to the left of it
   */
  noLabel?: boolean;
}

/**
 * Used to group a label & form input (or select).
 */
const FormGroup = (props: FormGroupProps) => {
  const {
    children,
    className,
    block,
    noLabel,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const myClassNames = [
    'form-group',
    block ? 'block' : null,
    noLabel ? 'no-label' : null,
    className,
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
};

export default React.memo(FormGroup);
