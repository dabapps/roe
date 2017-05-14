import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './livereload';

import {
  Column,
  Container,
  Row,
  Section
} from '../../../src/ts';

import { Buttons } from './buttons';
import { CodeBlocks } from './code-blocks';
import { Grid } from './grid';
import { Inputs } from './inputs';
import { Ipsum } from './ipsum';
import { Layout } from './layout';
import { Text } from './text';

const packageJson = require( '../../../package.json'); // tslint:disable-line:no-var-requires

class App extends React.Component<void, void> {
  public render () {
    return (
      <Container>
        <Section>
          <Row>
            <Column>
              <h1>
                Roe - DabApps' Project Development Kit (v{packageJson.version})
              </h1>
              <p>
                <strong>
                  A Collection of React Components for Project Development
                </strong>
              </p>
            </Column>
          </Row>
        </Section>

        <Buttons />
        <CodeBlocks />
        <Grid />
        <Inputs />
        <Ipsum />
        <Layout />
        <Text />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
