import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type MediaBodyProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Media Body tag used within a Media Object. See `Media` Object examples for usage.
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
