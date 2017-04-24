import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './livereload';

import {
  Container,
  Row,
  Column
} from '../../../src/ts';

class App extends React.Component<void, void> {
  render () {
    return (
      <Container>
        <Row>
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
