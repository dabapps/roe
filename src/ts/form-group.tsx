import * as classNames from 'classnames';
import * as React from 'react';

interface IProps {
  block?: boolean;
}

export const FormGroup: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    children,
    className,
    block,
    ...remainingProps
  } = props;

  const myClassNames = [
    'form-group',
    block ? 'block' : null,
    className
  ];

  return (
    <div {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </div>
  );
};
