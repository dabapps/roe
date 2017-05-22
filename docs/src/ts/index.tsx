import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './livereload';

import {
  CodeBlock,
  Column,
  Container,
  Row,
  Section
} from '../../../src/ts';

import { Buttons } from './buttons';
import { CodeBlocks } from './code-blocks';
import { Floats } from './floats';
import { Grid } from './grid';
import { Hides } from './hides';
import { Inputs } from './inputs';
import { Ipsum } from './ipsum';
import { Layout } from './layout';
import { Text } from './text';
import { Wells } from './wells';

const variables = fs.readFileSync(path.join(__dirname, '../../../src/less/variables.less'), 'utf8');

const packageJson = require( '../../../package.json'); // tslint:disable-line:no-var-requires

class App extends React.Component<{}, void> {
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
        <Floats />
        <Hides />
        <Grid />
        <Inputs />
        <Ipsum />
        <Layout />
        <Text />
        <Wells />

        <Section>
          <Row>
            <Column>
              <h2>
                Less variables
              </h2>
              <CodeBlock language="less">
                {variables}
              </CodeBlock>
            </Column>
          </Row>
        </Section>
      </Container>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
