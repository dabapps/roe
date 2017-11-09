import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

const Hrs = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Horizontal Rules
          </Anchor>
        </h2>
        <DabIpsum count={2} />
        <hr/>
        <DabIpsum count={2} />
        <hr className="fade"/>
        <DabIpsum count={2} />
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="html" name="HTML">
          {`
            <DabIpsum count={2} />

            <hr/>

            <DabIpsum count={2} />

            <hr className="fade"/>

            <DabIpsum count={2} />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Hrs;
