import * as React from 'react';

interface IProps {
  fluid?: boolean;
}

export const Container = (props: IProps) => {
  const { fluid } = props;
  const fluidClass = fluid ? '-fluid' : '';

  return (
    <div className={`container${fluidClass}`}>
      {props.children}
    </div>
  );
};
