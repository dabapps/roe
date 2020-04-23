import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ContentBoxFooterProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T>;

/**
 * Footer for `ContentBox`s, ideal for submit buttons, links & sub-text.
 * See the [ContentBox](#contentbox) section for a full example.
 */
export class ContentBoxFooter<
  T extends ComponentElement = 'div'
> extends PureComponent<ContentBoxFooterProps<T>, {}> {
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
