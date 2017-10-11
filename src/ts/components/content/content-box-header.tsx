import * as classNames from 'classnames';
import * as React from 'react';
import { StatelessComponent } from 'react';
import { ContentBoxProps } from '../../types';

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

export default ContentBoxHeader;
