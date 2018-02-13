import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import store from '../../store';
import { ComponentProps } from '../../types';

export interface FooterProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Fix the footer to the bottom of the window when there is not enough content to push it down.
   */
  fixed?: boolean;
}

export default class Footer extends PureComponent<FooterProps, {}> {
  public componentDidMount () {
    this.notifyAppRoot(this.props);
    this.toggleResizeListeners(this.props);
  }

  public componentWillUpdate (nextProps: FooterProps) {
    if (this.props.fixed !== nextProps.fixed) {
      this.notifyAppRoot(nextProps);
      this.toggleResizeListeners(nextProps);
    }
  }

  public componentWillUnmount () {
    window.removeEventListener('resize', this.updateAppRoot);
    this.notifyAppRoot({fixed: false});
  }

  public render () {
    const {
      fixed,
      component: Component = 'div',
      children,
      ...remainingProps,
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('footer', fixed && 'fixed')}>
        {children}
      </Component>
    );
  }

  private notifyAppRoot (props: FooterProps) {
    const { fixed } = props;

    store.setState({
      hasFixedFooter: fixed,
      footerHeight: ReactDOM.findDOMNode(this).getBoundingClientRect().height,
    });
  }

  private updateAppRoot = () => {
    this.notifyAppRoot(this.props);
  }

  private toggleResizeListeners(props: FooterProps) {
    const { fixed } = props;

    if (fixed) {
      window.addEventListener('resize', this.updateAppRoot);
    } else {
      window.removeEventListener('resize', this.updateAppRoot);
    }
  }
}
