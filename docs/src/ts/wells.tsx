import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section,
  Well
} from '../../../src/ts';

const Wells = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Wells
          </Anchor>
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
        <CodeBlock language="javascript" name="JSX">
          {`
            <Well>
              <DabIpsum count={2} />
            </Well>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Wells;
