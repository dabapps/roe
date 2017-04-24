import * as React from 'react';

interface IProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

export const Container = (props: IProps) => {
  const { fluid } = props;
  const className = fluid ? 'container-fluid' : 'container';

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};
