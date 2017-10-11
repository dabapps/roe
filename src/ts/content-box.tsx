import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface ContentBoxProps extends HTMLProps<HTMLElement> {
  component?: string;
}

export const ContentBox: StatelessComponent<ContentBoxProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('content-box', className)}>
      {children}
    </Component>
  );
}

// tslint:disable-next-line:max-classes-per-file
export const ContentBoxHeader: StatelessComponent<ContentBoxProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('content-box-header', className)}>
      {children}
    </Component>
  );
}

// tslint:disable-next-line:max-classes-per-file
export const ContentBoxFooter: StatelessComponent<ContentBoxProps> = (props) => {
  const {
    className,
    children,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component {...remainingProps} className={classNames('content-box-footer', className)}>
      {children}
    </Component>
  );
}
