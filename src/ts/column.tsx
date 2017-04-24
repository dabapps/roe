import * as React from 'react';

export const Column: React.SFC<void> = (props) => {
  return (
    <div className="column">
      {props.children}
    </div>
  );
};
