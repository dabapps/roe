import * as React from 'react';

import {
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

export const Ipsum = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Ipsum
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <DabIpsum />
        <DabIpsum type="ul" count={3} />
        <DabIpsum type="ol" count={3} />
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript">
          {`
            <DabIpsum />
            <DabIpsum type="ul" count={3} />
            <DabIpsum type="ol" count={3} />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
