import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './livereload';

import {
  Column,
  Container,
  Row
} from '../../../src/ts';

class App extends React.Component<void, void> {
  public render () {
    return (
      <Container>
        <Row>
          <Column>
            <h1>
              Roe | Project Development Kit
            </h1>
            <p>
              <strong>
                A Collection of React Components for Project Development
              </strong>
            </p>
          </Column>
          <Column>
            Column 1
          </Column>
          <Column>
            Column 2
          </Column>
          <Column>
            Column 3
          </Column>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
