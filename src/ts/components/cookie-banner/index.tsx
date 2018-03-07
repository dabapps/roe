import * as classNames from 'classnames';
import * as React from 'react';
import * as cookie from 'cookie';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import Banner from  '../banner';

export type Inner = (props: {dismiss: () => void}) => React.ReactElement<any>;

export interface CookieBannerProps extends ComponentProps, HTMLProps<HTMLElement> {
  inner: Inner;
}

export interface CookieBannerState {
  dismissed: boolean;
}

export class CookieBanner extends PureComponent<CookieBannerProps, CookieBannerState> {

  public constructor(props: CookieBannerProps) {
    super(props);

    this.state = {
      dismissed: Boolean(cookie.parse(document.cookie)['cookies-accepted'])
    };
  }

  public render () {
    const {
      ref,
      className,
      children,
      inner,
      ...remainingProps
    } = this.props;

    const { dismissed } = this.state;

    return (
      !dismissed ? (
        <Banner
          {...remainingProps}
          className={classNames('cookie-banner', className)}
        >
          {inner && inner({dismiss: this.setCookie})}
        </Banner>
      ) : null
    )
  }

  private setCookie = () =>  {
    document.cookie = cookie.serialize('cookies-accepted', 'true');
    this.setState({
      dismissed: true
    });
  }
}

export default CookieBanner;
