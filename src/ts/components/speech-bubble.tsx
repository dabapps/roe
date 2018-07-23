import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../types';

export interface SpeechBubbleProps
  extends ComponentProps,
    HTMLProps<HTMLElement> {
  /**
   * Set the style `display: block;`.
   */
  block?: boolean;
  /**
   *  Display the tail on either the left or the right.
   * @default 'left'
   */
  tailPosition?: 'left' | 'right';
}

/**
 * Speech bubble component for displaying conversations / messages.
 */
export class SpeechBubble extends PureComponent<SpeechBubbleProps, {}> {
  public render() {
    const {
      className,
      children,
      tailPosition = 'left',
      block,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames(
          'speech-bubble',
          tailPosition,
          block && 'block',
          className
        )}
      >
        <div className="bubble">
          {children}
          <div className="tail" />
        </div>
      </Component>
    );
  }
}

export default SpeechBubble;
