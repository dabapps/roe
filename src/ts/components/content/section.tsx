import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

/**
 * Used to separate sections of content with a horizontal-rule-like style.
 * Should only be used inside `ContentBox`s or `Column`s.
 */
const Section: FunctionComponentOptionalComponentProp<'div'> = (
  props: OptionalComponentProp<'div'>
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
