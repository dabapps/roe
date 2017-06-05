import * as React from 'react';

import {
  Alert,
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

const Alerts = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Alerts
        </h2>

        <Alert>
          <DabIpsum count={2} />
        </Alert>
        <Alert className="info">
          <DabIpsum count={2} />
        </Alert>
        <Alert className="success">
          <DabIpsum count={2} />
        </Alert>
        <Alert className="warning">
          <DabIpsum count={2} />
        </Alert>
        <Alert className="error">
          <DabIpsum count={2} />
        </Alert>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript" name="JSX">
          {`
            <Alert>
              <DabIpsum count={2} />
            </Alert>
            <Alert className="info">
              <DabIpsum count={2} />
            </Alert>
            <Alert className="success">
              <DabIpsum count={2} />
            </Alert>
            <Alert className="warning">
              <DabIpsum count={2} />
            </Alert>
            <Alert className="error">
              <DabIpsum count={2} />
            </Alert>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Alerts;
