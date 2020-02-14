import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';

export type InputGroupAddonProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Used to display additional context within an `InputGroup`.
 */
export class InputGroupAddon extends PureComponent<InputGroupAddonProps, {}> {
  public render() {
    const {
      children,
      className,
      width,
      style,
      component: Component = 'div' as any,
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
