import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const Sections = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Section
          </Anchor>
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
        <CodeBlock language="javascript" name="JSX">
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

export default Sections;
