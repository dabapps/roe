import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface HighlightProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Displays the overlay
   * @default false
   */
  open?: boolean;
  /**
   * Disables any interactions with highlighted area
   * @default false
   */
  disabled?: boolean;
  /**
   * Background colour
   * @default undefined
   */
  backgroundColor?: string | undefined;
}

/**
 * This highlight component it used to display a single element while shading everything else out.
 */
export class Highlight extends PureComponent<HighlightProps, {}> {
  public render() {
    const {
      className,
      children,
      open = false,
      disabled = false,
      backgroundColor = null,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('highlight', className)}
      >
        {open && <div className="overlay" />}
        {disabled && <div className="overlay-disabled" />}
        <div
          className={classNames('content', open && 'open')}
          style={backgroundColor ? { backgroundColor } : undefined}
        >
          {children}
        </div>
      </Component>
    );
  }
}

export default Highlight;
