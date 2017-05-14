import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

export const Layout = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Section
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <Section>
          <p>
            Section 1
          </p>
        </Section>
        <Section>
          <p>
            Section 2
          </p>
        </Section>
        <Section>
          <p>
            Section 3
          </p>
        </Section>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript">
          {`
            <Section>
              <p>
                Section 1
              </p>
            </Section>
            <Section>
              <p>
                Section 2
              </p>
            </Section>
            <Section>
              <p>
                Section 3
              </p>
            </Section>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
