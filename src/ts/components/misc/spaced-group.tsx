import * as classNames from 'classnames';
import * as React from 'react';

import { memoWithComponentProp } from '../../utils';
import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';

export interface SpacedGroupProps {
  /**
   * Set the group to `display: block;` so it fills its parent.
   */
  block?: boolean;
  /**
   * Reduced spacing between items.
   */
  small?: boolean;
  /**
   * Increased spacing between items.
   */
  large?: boolean;
}

/**
 * Component to contain & automatically add space between inline elements.
 */
const SpacedGroup: FunctionComponentOptionalComponentProp<
  'span',
  SpacedGroupProps
> = (props: OptionalComponentProp<'span'> & SpacedGroupProps) => {
  const {
    children,
    className,
    block,
    small,
    large,
    component: Component = 'span',
    ...remainingProps
  } = props;

  const myClassNames = [
    'spaced-group',
    block ? 'block' : null,
    small ? 'small' : null,
    large ? 'large' : null,
    className,
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
};

export default memoWithComponentProp(SpacedGroup);
