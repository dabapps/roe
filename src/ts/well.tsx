import * as classNames from 'classnames';
import * as React from 'react';

export const Well: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, ...remainingProps } = props;

  return (
    <div {...remainingProps} className={classNames(['well', className])}>
      {children}
    </div>
  );
};
