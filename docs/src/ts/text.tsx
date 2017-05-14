import * as React from 'react';

import {
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

        <p className="alert">
          <DabIpsum type="text" />
        </p>
        <p className="alert info">
          <DabIpsum type="text" />
        </p>
        <p className="alert success">
          <DabIpsum type="text" />
        </p>
        <p className="alert warning">
          <DabIpsum type="text" />
        </p>
        <p className="alert error">
          <DabIpsum type="text" />
        </p>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript">
          {`
            <p className="info" />
            <p className="success" />
            <p className="warning" />
            <p className="error" />

            <p className="alert" />
            <p className="alert info" />
            <p className="alert success" />
            <p className="alert warning" />
            <p className="alert error" />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
