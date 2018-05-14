import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import Button from '../forms/button';

export interface FileThumbnailProps
  extends ComponentProps,
  HTMLProps<HTMLElement> {
  /**
   *
   */
  file: any;
}

export class FileThumbnail extends PureComponent<
  FileThumbnailProps,
  {}
  > {

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
        className={classNames('roe-file-thumbnail', className)}
      >
      </Component>
    );
  }

}

export default FileThumbnail;
