import * as React from 'react';
import { joinClassNames } from './utils';

export const Column: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, ...remainingProps } = props;

  return (
    <div {...remainingProps} className={joinClassNames(['column', className])}>
      {props.children}
    </div>
  );
};
