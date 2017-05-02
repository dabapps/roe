import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  block?: boolean;
  large?: boolean;
  type?: string;
}

export const Button: React.SFC<IProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
  const {
    children,
    className,
    block,
    large,
    type,
    ...remainingProps
  } = props;

  const myClassNames = [
    'button',
    block ? 'block' : null,
    large ? 'large' : null,
    type,
    className
  ];

  return (
    <button {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </button>
  );
};
