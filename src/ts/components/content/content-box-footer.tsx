import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps } from 'react';
import { StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type ContentBoxFooterProps = ComponentProps & HTMLProps<HTMLElement>;

export const ContentBoxFooter: StatelessComponent<ContentBoxFooterProps> = (props) => {
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

export default ContentBoxFooter;
