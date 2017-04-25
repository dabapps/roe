import * as React from 'react';
import { joinClassNames } from './utils';

interface IProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

export const Container: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, fluid, ...remainingProps } = props;
  const fluidClassName = fluid ? 'container-fluid' : 'container';

  return (
    <div {...remainingProps} className={joinClassNames([fluidClassName, className])}>
      {children}
    </div>
  );
};
