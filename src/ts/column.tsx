import * as React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Column = (props: IProps) => {
  return (
    <div className="column">
      {props.children}
    </div>
  );
};
