import * as classNames from 'classnames';
import * as React from 'react';

export interface IComponentProps {
  component?: string;
}

export const ContentBox: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
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

export const ContentBoxHeader: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
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

export const ContentBoxFooter: React.SFC<IComponentProps & React.HTMLProps<HTMLDivElement>> = (props) => {
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
