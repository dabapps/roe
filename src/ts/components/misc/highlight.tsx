import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

const TIMEOUT = {
  appear: 300,
  enter: 300,
  exit: 200,
};

/**
 * This highlight component is used to display a single element while shading everything else out.
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
        <TransitionGroup>
          {open && (
            <CSSTransition classNames="highlight-transition" timeout={TIMEOUT}>
              <div className="highlight-overlay" />
            </CSSTransition>
          )}
        </TransitionGroup>
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
