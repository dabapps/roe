import * as React from 'react';

import {
  Anchor,
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
          <Anchor>
            Atomic Text Classes
          </Anchor>
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
          </span> <span className="underline">
            Underline
          </span>
        </p>

        <p>
          <span className="font-weight-light">
            Light
          </span> <span className="font-weight-normal">
            Normal
          </span> <span className="font-weight-bold">
            Bold
          </span>
        </p>

        <p className="primary">
          <DabIpsum component="text" />
        </p>
        <p className="secondary">
          <DabIpsum component="text" />
        </p>
        <p className="tertiary">
          <DabIpsum component="text" />
        </p>
        <p className="info">
          <DabIpsum component="text" />
        </p>
        <p className="success">
          <DabIpsum component="text" />
        </p>
        <p className="warning">
          <DabIpsum component="text" />
        </p>
        <p className="error">
          <DabIpsum component="text" />
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
              <DabIpsum component="text" />
            </p>
            <p className="secondary">
              <DabIpsum component="text" />
            </p>
            <p className="tertiary">
              <DabIpsum component="text" />
            </p>
            <p className="info">
              <DabIpsum component="text" />
            </p>
            <p className="success">
              <DabIpsum component="text" />
            </p>
            <p className="warning">
              <DabIpsum component="text" />
            </p>
            <p className="error">
              <DabIpsum component="text" />
            </p>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicText;
