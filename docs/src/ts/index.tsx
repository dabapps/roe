import * as React from 'react';
import { PureComponent } from 'react';
import BlueKit from 'react-bluekit';
import * as ReactDOM from 'react-dom';
import componentsIndex from '../../../src/ts/componentsIndex';

export default class App extends PureComponent<{}, void> {
  public render () {
    return (
      <BlueKit
        componentsIndex={componentsIndex}

        // display inline (not full page)
        inline

        // this name is used for bluekit local storage as namespace
        // it is optional
        // name="MyProjectName"
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
