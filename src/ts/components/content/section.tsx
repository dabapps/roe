import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export type SectionProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C>;

/**
 * Used to separate sections of content with a horizontal-rule-like style.
 * Should only be used inside `ContentBox`s or `Column`s.
 */
const Section: FunctionComponentOptionalComponentProp<'div'> = (
  props: SectionProps
) => {
  const {
    children,
    className,
    component: Component = 'section',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames(['section', className])}
    >
      {children}
    </Component>
  );
};

export default memoWithComponentProp(Section);
