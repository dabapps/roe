import * as classNames from 'classnames';
import * as React from 'react';
import { StatelessComponent } from 'react';
import { ContentBoxProps } from '../../types';

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

export default ContentBox;
