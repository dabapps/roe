import * as classNames from 'classnames';
import * as React from 'react';

interface IProps {
  component?: string;
}

export const Section: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, component: Component = 'section', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['section', className])}>
      {children}
    </Component>
  );
};
