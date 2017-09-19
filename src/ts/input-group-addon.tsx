import * as classNames from 'classnames';
import * as React from 'react';

interface IProps {
  component?: string;
}

export const InputGroupAddon: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    children,
    className,
    width,
    style,
    component: Component = 'div',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('input-group-addon', className)}
      style={{width, ...style}}
    >
      {children}
    </Component>
  );
};
