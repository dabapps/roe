import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type ContentBoxProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
>;

/**
 * Box for displaying content within.
 */
export class ContentBox<
  T extends ComponentElement = 'div'
> extends PureComponent<ContentBoxProps<T>, {}> {
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
