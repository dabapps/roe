import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface MediaProps
  extends ComponentProps,
  HTMLProps<HTMLElement> {
  /**
   * Set the group to `display: block;` so it fills its parent.
   */
  reversed?: boolean;
  /**
   * Reduced spacing between items.
   */
  centered?: boolean;
}
/**
 * Box for displaying content within.
 */
export class Media extends PureComponent<MediaProps, {}> {
  public render() {
    const {
      className,
      children,
      reversed,
      centered,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'media',
      reversed ? 'media-reversed' : null,
      centered ? 'media-centered' : null,
      className,
    ];

    return (
      <Component
        {...remainingProps}
        className={classNames(myClassNames)}
      >
        {children}
      </Component>
    );
  }
}

export default Media;
