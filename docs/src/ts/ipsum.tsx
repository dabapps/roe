import * as React from 'react';

import {
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
          Ipsum
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
            <DabIpsum type="text" />
          </strong>
        </p>
        <DabIpsum type="p" count={5} />
        <DabIpsum type="ul" count={3} />
        <DabIpsum type="ol" count={3} />
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
                <DabIpsum type="text" />
              </strong>
            </p>
            <DabIpsum type="p" count={5} /> // Default
            <DabIpsum type="ul" count={3} />
            <DabIpsum type="ol" count={3} />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Ipsum;
