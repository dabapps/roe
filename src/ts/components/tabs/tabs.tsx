import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type TabsProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used to contain a set of `Tab` components.
 */
export class Tabs extends PureComponent<TabsProps, {}> {
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
