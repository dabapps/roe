import * as React from 'react';

export const Row: React.SFC<void> = (props) => {
  return (
    <div className="row">
      {props.children}
    </div>
  );
};
