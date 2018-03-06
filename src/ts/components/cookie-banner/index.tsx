import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent, ReactElement } from 'react';
import { ComponentProps } from '../../types';

export interface CookieBannerProps extends ComponentProps, HTMLProps<HTMLElement> {
  content?: any;
}

export class CookieBanner extends PureComponent<CookieBannerProps, {}> {
  public componentWillMount() {
    this.getCookie();
  }

  public render () {
    const {
      className,
      children,
      content,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('cookie-banner', className)}>
        {content && content(this.setCookie)}
      </Component>
    );
  }

  private setCookie = () => {
    console.log('setCookie...')
  }

  private getCookie = () => {
    console.log('getCookie...')
  }
}

export default CookieBanner;
