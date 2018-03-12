import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type ContentBoxFooterProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Footer for `ContentBox`s, ideal for submit buttons, links & sub-text.
 * See the [ContentBox](#contentbox) section for a full example.
 */
export class ContentBoxFooter extends PureComponent<ContentBoxFooterProps, {}> {
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
        className={classNames('content-box-footer', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ContentBoxFooter;
