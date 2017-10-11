import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  component?: string;
  block?: boolean;
  large?: boolean;
  small?: boolean;
}

export const Button: React.SFC<IProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
  const {
    children,
    className,
    block,
    large,
    small,
    component: Component = 'button',
    ...remainingProps
  } = props;

  const myClassNames = [
    'button',
    block ? 'block' : null,
    small ? 'small' : null,
    large ? 'large' : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
};
