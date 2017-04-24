import * as React from 'react';

interface IProps {
  fluid: boolean;
}

export class Container extends React.Component<IProps, any> {
  render () {
    const { fluid } = this.props;
    const fluidClass = fluid ? '-fluid' : '';

    return (
      <div className={`container${fluidClass}`}>
        {this.props.children}
      </div>
    );
  }
}
