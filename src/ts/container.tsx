import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  fluid?: boolean;
  solid?: boolean;
  children?: React.ReactNode;
}

export const Container: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, fluid, solid, ...remainingProps } = props;
  const fluidClassName = fluid ? 'container-fluid' : 'container';
  const solidClassName = solid && 'solid';

  return (
    <div {...remainingProps} className={classNames(fluidClassName, solidClassName, className)}>
      {children}
    </div>
  );
};
