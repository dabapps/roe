import * as React from 'react';

interface IProps {
  fluid?: boolean;
}

export const Container = (props: IProps) => {
  const { fluid } = this.props;
  const fluidClass = fluid ? '-fluid' : '';

  return (
    <div className={`container${fluidClass}`}>
      {this.props.children}
    </div>
  );
};
