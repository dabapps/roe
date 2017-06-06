import * as classNames from 'classnames';
import * as React from 'react';

export const SpacedGroup: React.SFC<React.HTMLProps<HTMLSpanElement>> = (props) => {
  const { children, className, ...remainingProps } = props;

  return (
    <span {...remainingProps} className={classNames(['spaced-group', className])}>
      {children}
    </span>
  );
};
