import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
