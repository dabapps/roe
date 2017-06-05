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

import Alerts from './alerts';
import AtomicFloats from './atomic-floats';
import AtomicHides from './atomic-hides';
import AtomicSpacing from './atomic-spacing';
import AtomicText from './atomic-text';
import Buttons from './buttons';
import CodeBlocks from './code-blocks';
import ContentBoxes from './content-boxes';
import Grid from './grid';
import Inputs from './inputs';
import Ipsum from './ipsum';
import Modals from './modals';
import Sections from './sections';
import Tables from './tables';
import TabDemo from './tabs';
import Wells from './wells';

const variables = fs.readFileSync(path.join(__dirname, '../../../src/less/variables.less'), 'utf8');

const packageJson = require( '../../../package.json'); // tslint:disable-line:no-var-requires

class App extends React.Component<{}, void> {
  public render () {
    return (
      <Container solid>
        <Section>
          <Row>
            <Column>
              <h1>
                Roe
              </h1>
              <p>
                <strong>
                  DabApps' Project Development Kit (v{packageJson.version})
                </strong>
              </p>
            </Column>
          </Row>
        </Section>

        <AtomicFloats />
        <AtomicHides />
        <AtomicSpacing />
        <AtomicText />
        <Alerts />
        <Buttons />
        <CodeBlocks />
        <Grid />
        <Inputs />
        <Ipsum />
        <ContentBoxes />
        <Sections />
        <Modals />
        <TabDemo />
        <Tables />
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
