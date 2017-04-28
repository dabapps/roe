import * as classNames from 'classnames';
import * as React from 'react';

interface IProps {
  block?: boolean;
  type?: string;
}

export const Button: React.SFC<IProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
  const {
    children,
    className,
    block,
    type,
    ...remainingProps
  } = props;

  const myClassNames = [
    'button',
    block ? 'block' : null,
    type ? type : 'default',
    className
  ];

  return (
    <button {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </button>
  );
};
