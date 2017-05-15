import * as React from 'react';

import {
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section,
  Well
} from '../../../src/ts';

export const Wells = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Wells
        </h2>
      </Column>
    </Row>
    <Row>
      <Column className="display-columns">
        <h3>
          Demo
        </h3>
        <Well>
          <DabIpsum count={2} />
        </Well>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock>
          {`
            <Well>
              <DabIpsum count={2} />
            </Well>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
)
