import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface FormGroupPropsBase {
  /**
   * Set the style `display: block;` with label above input.
   */
  block?: boolean;
  /**
   * Offset the input, select, etc as if there was a label to the left of it
   */
  noLabel?: boolean;
}

export type FormGroupProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & FormGroupPropsBase;

/**
 * Used to group a label & form input (or select).
 */
const FormGroup: FunctionComponentOptionalComponentProp<
  'div',
  FormGroupPropsBase
> = (props: FormGroupProps) => {
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

export default memoWithComponentProp(FormGroup);
