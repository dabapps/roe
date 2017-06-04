import * as React from 'react';

import {
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

export const AtomicText = () => (
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

        <p>
          <span className="bold">
            Bold
          </span> <span className="italic">
            Italic
          </span> <span className="bold italic">
            Bold Italic
          </span>
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
        <CodeBlock language="javascript">
          {`
            <p className="font-size-h1">
              Paragraph with header size
            </p>

            <p>
              <span className="bold">
                Bold
              </span> <span className="italic">
                Italic
              </span> <span className="bold italic">
                Bold Italic
              </span>
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
