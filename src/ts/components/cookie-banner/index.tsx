import * as classNames from 'classnames';
import * as React from 'react';
import * as cookie from 'cookie';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import Banner from  '../banner';

type IRender = (props: {dismiss: () => void}) => React.ReactElement<any>;

interface CookieBannerProps extends ComponentProps, HTMLProps<HTMLElement> {
  render: IRender;
  top?: boolean;
}

interface CookieBannerState {
  dismissed: boolean;
}

class CookieBanner extends PureComponent<CookieBannerProps, CookieBannerState> {

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
      render,
      top = false,
      ...remainingProps
    } = this.props;

    const { dismissed } = this.state;

    return (
      <Banner
        {...remainingProps}
        top={top}
        open={!dismissed}
        className={classNames('cookie-banner', className)}
      >
        {render && render({dismiss: this.setCookie})}
      </Banner>
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
