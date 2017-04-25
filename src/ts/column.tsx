import * as React from 'react';

export const Column: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className="column">
      {props.children}
    </div>
  );
};
