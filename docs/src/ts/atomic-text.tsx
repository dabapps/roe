import * as React from 'react';

import {
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

const AtomicText = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Atomic Text Classes
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>

        <p className="font-size-h1">
          Paragraph with header size
        </p>

        <h3 className="font-size-base">
          Header with base font size (small & large also available)
        </h3>

        <p>
          <span className="bold">
            Bold
          </span> <span className="italic">
            Italic
          </span> <span className="bold italic">
            Bold Italic
          </span>
        </p>

        <p className="primary">
          <DabIpsum type="text" />
        </p>
        <p className="secondary">
          <DabIpsum type="text" />
        </p>
        <p className="tertiary">
          <DabIpsum type="text" />
        </p>
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
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript" name="JSX">
          {`
            <p className="font-size-h1">
              Paragraph with header size
            </p>

            <h3 className="font-size-base">
              Header with base font size (small & large also available)
            </h3>

            <p>
              <span className="bold">
                Bold
              </span> <span className="italic">
                Italic
              </span> <span className="bold italic">
                Bold Italic
              </span>
            </p>

            <p className="primary">
              <DabIpsum type="text" />
            </p>
            <p className="secondary">
              <DabIpsum type="text" />
            </p>
            <p className="tertiary">
              <DabIpsum type="text" />
            </p>
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
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicText;
