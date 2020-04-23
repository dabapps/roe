import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type ContentBoxProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Box for displaying content within.
 */
export class ContentBox extends PureComponent<ContentBoxProps, {}> {
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
        className={classNames('content-box', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ContentBox;
