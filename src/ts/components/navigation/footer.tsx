import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import store from '../../store';
import { ComponentProps } from '../../types';

import { ResizeObserver } from '@juggle/resize-observer';

export interface FooterProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Fix the footer to the bottom of the window when there is not enough content to push it down.
   */
  sticky?: boolean;
  /**
   * Fix the footer to the bottom of the screen always
   */
  fixed?: boolean;
}

export class Footer extends PureComponent<FooterProps, {}> {
  private element: HTMLDivElement | null = null;

  private storeRef = (element: HTMLDivElement | null) => {
    this.element = element;
  }

  public componentDidMount() {
    this.element && this.observer.observe(this.element);
  }

  public componentDidUpdate(prevProps: FooterProps) {
    if (
      Boolean(this.props.sticky || this.props.fixed) !==
      Boolean(prevProps.sticky || prevProps.fixed)
    ) {
      this.element && this.observer.observe(this.element);;
    }
  }

  public componentWillUnmount() {
    this.observer.disconnect();
  }

  public render() {
    const {
      sticky,
      fixed,
      component: Component = 'div',
      children,
      className,
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        ref={this.storeRef}
        className={classNames('footer', { sticky, fixed }, className)}
      >
        {children}
      </Component>
    );
  }

  private observer = new ResizeObserver((entries, observer) => {
    const { sticky, fixed } = this.props;

      for (const entry of entries) {
        const { height } = entry.contentRect;

        store.setState({
          hasStickyFooter: Boolean(sticky || fixed),
          footerHeight:
            this.element && this.element instanceof HTMLDivElement
              ? height
              : undefined,
        });
      }
    }
  );
}

export default Footer;
