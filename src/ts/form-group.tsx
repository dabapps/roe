import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  component?: string;
  block?: boolean;
}

export const FormGroup: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const {
    children,
    className,
    block,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const myClassNames = [
    'form-group',
    block ? 'block' : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
};
