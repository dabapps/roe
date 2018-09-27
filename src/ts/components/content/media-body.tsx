import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type MediaBodyProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Box for displaying content within.
 */
export class MediaBody extends PureComponent<MediaBodyProps, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('media-body', className)}
      >
        {children}
      </Component>
    );
  }
}

export default MediaBody;
