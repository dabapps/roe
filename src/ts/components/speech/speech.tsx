import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface SpeechProps extends ComponentProps, HTMLProps<HTMLElement> {
/**
 *  Position the speech bubble arrow thingy on the right
 */
  sent ?: boolean;
/**
 * Position the speech bubble arrow thingy on the left
 */
  received ?: boolean;
}
/**
 * Speech Bubble Component
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
          sent ? 'sent' : null,
          received ? 'received' : null,
          className,
        )}
      >
        <div className="bubble">
          {children}
        </div>
      </Component>
    );
  }
}

export default Speech;
