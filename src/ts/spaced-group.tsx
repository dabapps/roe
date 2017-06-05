import * as classNames from 'classnames';
import * as React from 'react';

export const SpacedGroup: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, ...remainingProps } = props;

  return (
    <div {...remainingProps} className={classNames(['spaced-group', className])}>
      {children}
    </div>
  );
};
