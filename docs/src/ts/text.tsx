import * as React from 'react';

import {
  Alert,
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

export const Text = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Text
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Headers
        </h3>
        <h1>
          Header 1
        </h1>
        <h2>
          Header 2
        </h2>
        <h3>
          Header 3
        </h3>
        <h4>
          Header 4
        </h4>
        <h5>
          Header 5
        </h5>
        <h6>
          Header 6
        </h6>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Body
        </h3>
        <p>
          <i>
            <DabIpsum type="text" />
          </i>
        </p>
        <p>
          <strong>
            <i>
              <DabIpsum type="text" />
            </i>
          </strong>
        </p>
        <p>
          <strong>
            <DabIpsum type="text" />
          </strong>
        </p>
        <p>
          <a href="#">
            Link
          </a>
        </p>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Special
        </h3>
        <p className="info">
          <DabIpsum type="text" />
        </p>
        <p className="success">
          <DabIpsum type="text" />
        </p>
        <p className="warning">
          <DabIpsum type="text" />
        </p>
        <p className="error">
          <DabIpsum type="text" />
        </p>

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
        <CodeBlock language="javascript">
          {`
            <p className="info">
              <DabIpsum type="text" />
            </p>
            <p className="success">
              <DabIpsum type="text" />
            </p>
            <p className="warning">
              <DabIpsum type="text" />
            </p>
            <p className="error">
              <DabIpsum type="text" />
            </p>

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
