import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type SectionProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used to separate sections of content with a horizontal-rule-like style.
 * Should only be used inside `ContentBox`s or `Column`s.
 */
export class Section extends PureComponent<SectionProps, {}> {
  public render() {
    const {
      children,
      className,
      component: Component = 'section',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames(['section', className])}
      >
        {children}
      </Component>
    );
  }
}

export default Section;
