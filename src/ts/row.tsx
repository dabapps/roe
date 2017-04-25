import * as React from 'react';

export const Row: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className="row">
      {props.children}
    </div>
  );
};
