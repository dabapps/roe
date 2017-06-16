import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  DabIpsum,
  Row,
  Section
} from '../../../src/ts';

const Ipsum = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Ipsum
          </Anchor>
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <p>
          <strong>
            <DabIpsum component="text" />
          </strong>
        </p>
        <DabIpsum component="p" count={5} />
        <DabIpsum component="ul" count={3} />
        <DabIpsum component="ol" count={3} />
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript" name="JSX">
          {`
            <p>
              <strong>
                <DabIpsum component="text" />
              </strong>
            </p>
            <DabIpsum component="p" count={5} /> // Default
            <DabIpsum component="ul" count={3} />
            <DabIpsum component="ol" count={3} />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Ipsum;
