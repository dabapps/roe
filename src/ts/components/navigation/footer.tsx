import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';

export interface FooterProps extends HTMLProps<HTMLElement> {
  /**
   * Fix the footer to the bottom of the window when there is not enough content to push it down.
   */
  fixed?: boolean;
}

export default class Footer extends PureComponent<FooterProps, {}> {
  public render () {
    const {
      fixed,
      children,
      ...remainingProps,
    } = this.props;

    return (
      <div {...remainingProps} className={classNames('footer', fixed && 'fixed')}>
        {children}
      </div>
    );
  }
}
