import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ContentBoxHeaderProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T>;

/**
 * Header for `ContentBox`s, used to display a content's title.
 * See the [ContentBox](#contentbox) section for a full example.
 */
export class ContentBoxHeader<
  T extends ComponentElement = 'div'
> extends PureComponent<ContentBoxHeaderProps<T>, {}> {
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
        className={classNames('content-box-header', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ContentBoxHeader;
