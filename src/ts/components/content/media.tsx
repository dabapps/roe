import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface MediaProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * flip the order of the Media Object R-T-L
   */
  reversed?: boolean;
}

/**
 * Box for displaying an image and aligned content in - can be used for profile cards, listing cards, anywhere you display an image next to some elements.
 */
export class Media extends PureComponent<MediaProps, {}> {
  public render() {
    const {
      className,
      children,
      reversed,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'media',
      reversed ? 'media-reversed' : null,
      className,
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}

export default Media;
