import * as classNames from 'classnames';
import * as React from 'react';

interface IProps {
  component?: string;
}

export const Alert: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, component: Component = 'div', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['alert', className])}>
      {children}
    </Component>
  );
};
