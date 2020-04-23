import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type HighlightProps<T extends ComponentElement> = ComponentAndHTMLProps<
  T
> & {
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
};

/**
 * This highlight component is used to display a single element while shading everything else out.
 */
export class Highlight<
  T extends ComponentElement = 'div'
> extends PureComponent<HighlightProps<T>, {}> {
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
        <CSSTransitionGroup
          transitionName="highlight-transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          {open && <div className="highlight-overlay" />}
        </CSSTransitionGroup>
        <div
          className={classNames('highlight-content', open && 'open')}
          style={backgroundColor ? { backgroundColor } : undefined}
        >
          {children}
          {open && disabled && <div className="highlight-overlay-disabled" />}
        </div>
      </Component>
    );
  }
}

export default Highlight;
