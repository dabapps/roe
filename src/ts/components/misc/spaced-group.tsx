import * as classNames from 'classnames';
import * as React from 'react';

import { memoWithComponentProp } from '../../utils';
import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';

export interface SpacedGroupPropsBase {
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

export type SpacedGroupProps<
  C extends IntrinsicElementType = 'span'
> = OptionalComponentProp<C> & SpacedGroupPropsBase;

/**
 * Component to contain & automatically add space between inline elements.
 */
const SpacedGroup: FunctionComponentOptionalComponentProp<
  'span',
  SpacedGroupPropsBase
> = (props: SpacedGroupProps) => {
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

const SpacedGroupMemo = memoWithComponentProp(SpacedGroup);

export { SpacedGroupMemo as SpacedGroup };

export default SpacedGroupMemo;
