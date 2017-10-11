import * as classNames from 'classnames';
import * as React from 'react';

export interface IProps {
  component?: string;
  block?: boolean;
  small?: boolean;
  large?: boolean;
}

export const SpacedGroup: React.SFC<IProps & React.HTMLProps<HTMLSpanElement>> = (props) => {
  const {
    children,
    className,
    block,
    small,
    large,
    component: Component = 'span',
    ...remainingProps
  } = props;

  const myClassNames = [
    'spaced-group',
    block ? 'block' : null,
    small ? 'small' : null,
    large ? 'large' : null,
    className
  ]

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
};
