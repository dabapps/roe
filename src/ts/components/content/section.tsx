import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type SectionProps = OptionalComponentPropAndHTMLAttributes;

/**
 * Used to separate sections of content with a horizontal-rule-like style.
 * Should only be used inside `ContentBox`s or `Column`s.
 */
const Section = (props: SectionProps) => {
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

export default React.memo(Section);
