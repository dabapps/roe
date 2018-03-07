import * as classNames from 'classnames';
import * as React from 'react';
import * as cookie from 'cookie';
import { HTMLAttributes, PureComponent, ReactElement } from 'react';
import { ComponentProps } from '../../types';
import Banner from  '../banner';

export interface CookieBannerProps extends ComponentProps, HTMLAttributes<HTMLDivElement> {
  content?: any;
}

export interface CookieBannerState { // tslint:disable-line:no-unused-variable
  dismissed: boolean;
}

export class CookieBanner extends PureComponent<CookieBannerProps, CookieBannerState> {

  public constructor(props: CookieBannerProps) {
    super(props);

    this.state = {
      dismissed: false
    };
  }

  public componentWillMount() {
    this.getCookie();
  }

  public render () {
    const {
      className,
      children,
      content,
      ...remainingProps
    } = this.props;

    const { dismissed } = this.state;

    const isAccepted = this.getCookie().banner;

    return (
      !isAccepted && !dismissed ?
      <Banner
        {...remainingProps}
        className={classNames('cookie-banner', className)}
      >
        {content && content(this.setCookie)}
      </Banner> : null
    )
  }

  private setCookie = () =>  {
    document.cookie = cookie.serialize('banner', 'cookies-accepted');
    this.setState({
      dismissed: true
    });
  };

  private getCookie = () => cookie.parse(document.cookie);
}

export default CookieBanner;
