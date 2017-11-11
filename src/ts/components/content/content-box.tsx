import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps } from 'react';
import { StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type ContentBoxProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Box for displaying content within.
 */
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
