import * as classNames from 'classnames';
import * as React from 'react';

export const InputGroupAddon: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    children,
    className,
    width,
    style,
    ...remainingProps
  } = props;

  return (
    <div
      {...remainingProps}
      className={classNames('input-group-addon', className)}
      style={{width, ...style}}
    >
      {children}
    </div>
  );
};
