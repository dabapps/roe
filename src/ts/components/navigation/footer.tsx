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
  public componentDidMount() {
    this.notifyAppRoot(this.props);
    this.toggleResizeListeners(this.props);
  }

  public componentDidUpdate(prevProps: FooterProps) {
    if (
      Boolean(this.props.sticky || this.props.fixed) !==
      Boolean(prevProps.sticky || prevProps.fixed)
    ) {
      this.toggleResizeListeners(this.props);
    }

    this.notifyAppRoot(this.props);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateAppRoot);
    this.notifyAppRoot({ sticky: false });
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
        className={classNames('footer', { sticky, fixed }, className)}
      >
        {children}
      </Component>
    );
  }

  private observer = (props: FooterProps) => new ResizeObserver((entries, observer) => {
    const { sticky, fixed } = props;
    const element = ReactDOM.findDOMNode(this);

      for (const entry of entries) {
        const {height} = entry.contentRect;

        // console.log('Element:', entry.target);
        // console.log(`Element's size: ${ width }px x ${ height }px`);

        store.setState({
          hasStickyFooter: Boolean(sticky || fixed),
          footerHeight:
            element && element instanceof HTMLElement
              ? height
              : undefined,
        });
      }
    }
  );

  private notifyAppRoot(props: FooterProps) {
    const element = ReactDOM.findDOMNode(this);
    this.observer(this.props).observe(element);
  }

  private updateAppRoot = () => {
    this.notifyAppRoot(this.props);
  };

  private toggleResizeListeners(props: FooterProps) {
    const { sticky, fixed } = props;

    if (sticky || fixed) {
      window.addEventListener('resize', this.updateAppRoot);
    } else {
      window.removeEventListener('resize', this.updateAppRoot);
    }
  }
}

export default Footer;
