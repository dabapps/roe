import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps } from 'react';
import { StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type ContentBoxHeaderProps = ComponentProps & HTMLProps<HTMLElement>;

export const ContentBoxHeader: StatelessComponent<ContentBoxHeaderProps> = (props) => {
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

export default ContentBoxHeader;
