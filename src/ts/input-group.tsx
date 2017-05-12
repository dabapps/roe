import * as classNames from 'classnames';
import * as React from 'react';

export const InputGroup: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    children,
    className,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames('input-group', className)}>
      {children}
    </div>
  );
};
