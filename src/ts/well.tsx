import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  component?: string;
}

export const Well: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['well', className])}>
      {children}
    </Component>
  );
};
