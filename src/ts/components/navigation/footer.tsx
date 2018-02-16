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
  sticky?: boolean;
}

export class Footer extends PureComponent<FooterProps, {}> {
  public componentDidMount () {
    this.notifyAppRoot(this.props);
    this.toggleResizeListeners(this.props);
  }

  public componentWillUpdate (nextProps: FooterProps) {
    if (Boolean(this.props.sticky) !== Boolean(nextProps.sticky)) {
      this.notifyAppRoot(nextProps);
      this.toggleResizeListeners(nextProps);
    }
  }

  public componentWillUnmount () {
    window.removeEventListener('resize', this.updateAppRoot);
    this.notifyAppRoot({sticky: false});
  }

  public render () {
    const {
      sticky,
      component: Component = 'div',
      children,
      ...remainingProps,
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('footer', sticky && 'sticky')}>
        {children}
      </Component>
    );
  }

  private notifyAppRoot (props: FooterProps) {
    const { sticky } = props;
    const element = ReactDOM.findDOMNode(this);

    store.setState({
      hasStickyFooter: Boolean(sticky),
      footerHeight: element ? element.getBoundingClientRect().height : undefined,
    });
  }

  private updateAppRoot = () => {
    this.notifyAppRoot(this.props);
  }

  private toggleResizeListeners(props: FooterProps) {
    const { sticky } = props;

    if (sticky) {
      window.addEventListener('resize', this.updateAppRoot);
    } else {
      window.removeEventListener('resize', this.updateAppRoot);
    }
  }
}

export default Footer;
