import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type SpeechBubbleProps = {
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
} & OptionalComponentPropAndHTMLAttributes;

/**
 * Speech bubble component for displaying conversations / messages.
 */
const SpeechBubble = (props: SpeechBubbleProps) => {
  const {
    className,
    children,
    tailPosition = 'left',
    block,
    header,
    footer,
    component: Component = 'div',
    ...remainingProps
  } = props;

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
};

export default React.memo(SpeechBubble);
