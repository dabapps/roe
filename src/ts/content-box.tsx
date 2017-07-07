import * as classNames from 'classnames';
import * as React from 'react';

export const ContentBox: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('content-box', className)}>
      {children}
    </div>
  );
}

export const ContentBoxHeader: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('content-box-header', className)}>
      {children}
    </div>
  );
}

export const ContentBoxFooter: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    className,
    children,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('content-box-footer', className)}>
      {children}
    </div>
  );
}
