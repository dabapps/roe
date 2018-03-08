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
   * Positions the element at the 'top' or 'bottom' of the screen
   * @default 'bottom'
   */
  position?: 'top' | 'bottom';
}

/**
 * Stores a cookie to permanently dismiss the banner
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
