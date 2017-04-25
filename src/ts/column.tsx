import * as React from 'react';
import { joinClassNames } from './utils';

export const Column: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, ...remainingProps } = props;

  return (
    <div {...remainingProps} className={joinClassNames(['column', className])}>
      {children}
    </div>
  );
};
