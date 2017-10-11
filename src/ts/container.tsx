import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  component?: string;
  fluid?: boolean;
  solid?: boolean;
  children?: React.ReactNode;
}

export const Container: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, fluid, solid, component: Component = 'div', ...remainingProps } = props;
  const fluidClassName = fluid ? 'container-fluid' : 'container';
  const solidClassName = solid && 'solid';

  return (
    <Component {...remainingProps} className={classNames(fluidClassName, solidClassName, className)}>
      {children}
    </Component>
  );
};
