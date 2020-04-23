import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type InputGroupAddonProps<
  T extends ComponentElement
> = ComponentAndHTMLProps<T> & {
  /**
   * Set an explicit style width for this addon
   */
  width?: number;
};

/**
 * Used to display additional context within an `InputGroup`.
 */
export class InputGroupAddon<
  T extends ComponentElement = 'div'
> extends PureComponent<InputGroupAddonProps<T>, {}> {
  public render() {
    const {
      children,
      className,
      width,
      style,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('input-group-addon', className)}
        style={{ width, ...style }}
      >
        {children}
      </Component>
    );
  }
}

export default InputGroupAddon;
