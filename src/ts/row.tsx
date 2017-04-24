import * as React from 'react';

export class Row extends React.Component<any, any> {
  render () {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}
