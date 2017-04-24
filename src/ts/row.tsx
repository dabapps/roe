import * as React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Row = (props: IProps) => {
  return (
    <div className="row">
      {props.children}
    </div>
  );
};
