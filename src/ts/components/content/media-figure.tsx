import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface MediaFigureProps
  extends ComponentProps,
    HTMLProps<HTMLElement> {
  /**
   * centre the figure.
   */
  centered?: boolean;

  /**
   * small figure.
   */
  small?: boolean;

  /**
   * large figure.
   */
  large?: boolean;
}

/**
 * Media Figure tag used within a Media Object. See `Media` Object examples for usage.
 */
export class MediaFigure extends PureComponent<MediaFigureProps, {}> {
  public render() {
    const {
      className,
      children,
      centered,
      small,
      large,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const myClassNames = [
      'media-figure',
      centered ? 'media-figure-centered' : null,
      small ? 'media-figure-small' : null,
      large ? 'media-figure-large' : null,
      className,
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }
}

export default MediaFigure;
