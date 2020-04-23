import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type TabProps<T extends ComponentElement> = ComponentAndHTMLProps<T> & {
  /**
   * Apply active `Tab` styles.
   */
  active?: boolean;
};

/**
 * Tab component for use within the `Tabs` component.
 * Easily style active tabs with the `active` prop.
 * See the [Tabs](#tabs) section for a full example.
 */
export class Tab<T extends ComponentElement = 'li'> extends PureComponent<
  TabProps<T>,
  {}
> {
  public render() {
    const {
      className,
      children,
      active,
      component: Component = 'li',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('tab', active && 'active', className)}
      >
        {children}
      </Component>
    );
  }
}

export default Tab;
