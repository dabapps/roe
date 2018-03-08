import * as classNames from 'classnames';
import * as cookie from 'cookie';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import Banner from './banner';

export type Render = (props: {dismiss: () => void}) => React.ReactElement<any>;

export interface CookieBannerProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Takes a component as a function and renders as a child
   */
  render: Render;
  /**
   * If set to 'top', positions the component at the top
   * @default 'bottom'
   */
  position?: 'top' | 'bottom';
}

/**
 * Wrapper component for Banner which reads cookies and can be used to set a cookie on click.
 * See the [CookieBanner](#Banners) section for a full example.
 */
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
      render,
      position = 'bottom',
      ...remainingProps
    } = this.props;

    const { dismissed } = this.state;

    return (
      <Banner
        {...remainingProps}
        position={position}
        open={!dismissed}
        className={classNames('cookie-banner', className)}
      >
        {render && render({dismiss: this.setCookie})}
      </Banner>
    )
  }

  private setCookie = () => {
    document.cookie = cookie.serialize('cookies-accepted', 'true');
    this.setState({
      dismissed: true
    });
  }
}

export default CookieBanner;