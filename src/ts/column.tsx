import * as React from 'react';

export class Column extends React.Component<any, any> {
  render () {
    return (
      <div className="column">
        {this.props.children}
      </div>
    );
  }
}
