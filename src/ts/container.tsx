import * as React from 'react';

interface IProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

export const Container: React.SFC<IProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { fluid, ...propsWithoutFluid } = props;
  const className = fluid ? 'container-fluid' : 'container';

  return (
    <div {...propsWithoutFluid} className={className}>
      {props.children}
    </div>
  );
};
