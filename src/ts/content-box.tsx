import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface ContentBoxProps extends HTMLProps<HTMLDivElement> {
  component?: string;
}

export class ContentBox extends PureComponent<ContentBoxProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('content-box', className)}>
        {children}
      </Component>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ContentBoxHeader extends PureComponent<ContentBoxProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('content-box-header', className)}>
        {children}
      </Component>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ContentBoxFooter extends PureComponent<ContentBoxProps, void> {
  public render () {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames('content-box-footer', className)}>
        {children}
      </Component>
    );
  }
}
