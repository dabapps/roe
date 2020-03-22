import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactTransitionGroup from 'react-transition-group';

import { ComponentProps } from '../../types';

export interface HighlightProps extends ComponentProps, React.HTMLProps<HTMLElement> {
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
  timeout?: number;
}

/**
 * This highlight component is used to display a single element while shading everything else out.
 */
export class Highlight extends React.PureComponent<HighlightProps> {
  public render() {
    const {
      className,
      children,
      timeout = 500,
      open = false,
      disabled = false,
      backgroundColor = null,
      component: Component = 'div' as any,
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('highlight', className)}
      >
        <ReactTransitionGroup.Transition timeout={timeout}>
          <ReactTransitionGroup.TransitionGroup
            classNames="highlight-transition"
          >
            {open && <div className="highlight-overlay" />}
          </ReactTransitionGroup.TransitionGroup>
        </ReactTransitionGroup.Transition>
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
