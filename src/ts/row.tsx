import * as React from 'react';

export const Row: React.SFC<void> = (props) => {
  return (
    <div {...props} className="row">
      {props.children}
    </div>
  );
};
