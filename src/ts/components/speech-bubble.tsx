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
  /**
   * Elements to display above the speech bubble such as user name or time of post.
   */
  header?: React.ReactChild;
  /**
   * Elements to display below the speech bubble such as user name or time of post.
   */
  footer?: React.ReactChild;
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
      header,
      footer,
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
        {typeof header !== 'undefined' && (
          <span className="speech-bubble-header">{header}</span>
        )}
        <div className="bubble">
          {children}
          <div className="tail" />
        </div>
        {typeof footer !== 'undefined' && (
          <span className="speech-bubble-footer">{footer}</span>
        )}
      </Component>
    );
  }
}

export default SpeechBubble;
