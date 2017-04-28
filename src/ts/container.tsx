import * as classNames from 'classnames';
import * as React from 'react';

interface IProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

export const Container: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, fluid, ...remainingProps } = props;
  const fluidClassName = fluid ? 'container-fluid' : 'container';

  return (
    <div {...remainingProps} className={classNames(fluidClassName, className)}>
      {children}
    </div>
  );
};
