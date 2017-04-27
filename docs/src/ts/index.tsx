import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './livereload';

import {
  Column,
  Container,
  Row
} from '../../../src/ts';

import { Columns } from './columns';

class App extends React.Component<void, void> {
  public render () {
    return (
      <Container>
        <Row>
          <Column>
            <h1>
              Roe - DabApps' Project Development Kit
            </h1>
            <p>
              <strong>
                A Collection of React Components for Project Development
              </strong>
            </p>
          </Column>
        </Row>
        <Columns />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
