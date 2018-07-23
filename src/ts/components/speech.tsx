import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../types';

export interface SpeechProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   *  Position the speech bubble tail on the right
   */
  sent?: boolean;
  /**
   * Position the speech bubble tail on the left
   */
  received?: boolean;
}

/**
 * Speech bubble component for displaying conversations / messages.
 */
export class Speech extends PureComponent<SpeechProps, {}> {
  public render() {
    const {
      className,
      children,
      sent,
      received,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames(
          'speech',
          sent && 'sent',
          received && 'received',
          className
        )}
      >
        <div className="bubble">{children}</div>
      </Component>
    );
  }
}

export default Speech;
