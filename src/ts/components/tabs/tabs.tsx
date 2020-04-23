import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type TabsProps<T extends ComponentElement> = ComponentAndHTMLProps<T>;

/**
 * Used to contain a set of `Tab` components.
 */
export class Tabs<T extends ComponentElement = 'ul'> extends PureComponent<
  TabsProps<T>,
  {}
> {
  public render() {
    const {
      className,
      children,
      component: Component = 'ul',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('tabs', className)}>
        {children}
      </Component>
    );
  }
}

export default Tabs;
