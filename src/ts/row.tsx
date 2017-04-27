import * as classNames from 'classnames';
import * as React from 'react';

export const Row: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, ...remainingProps } = props;

  return (
    <div {...remainingProps} className={classNames(['row', className])}>
      {children}
    </div>
  );
};
