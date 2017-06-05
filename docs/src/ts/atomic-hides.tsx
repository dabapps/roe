import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const AtomicHides = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Atomic Hide & Display Classes
        </h2>
      </Column>
    </Row>
    <Row>
      <Column className="display-columns">
        <h3>
          Demo
        </h3>
        <Row>
          <Column xs={6} className="xs-display-none sm-display-block md-display-none">
            xs-display-none sm-display-block md-display-none
          </Column>
          <Column xs={6} className="xs-display-block sm-display-none md-display-block">
            xs-display-block sm-display-none md-display-block
          </Column>
        </Row>
        <p>
          Available display types are: none, block, inline, inline-block
        </p>
        <p>
          Note: display-none is an alias for xs-display-none, and display-block an alias for xs-display-block, etc
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
            <Row>
              <Column xs={6} className="xs-display-none sm-display-block md-display-none">
                xs-display-none sm-display-block md-display-none
              </Column>
              <Column xs={6} className="xs-display-block sm-display-none md-display-block">
                xs-display-block sm-display-none md-display-block
              </Column>
            </Row>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicHides;
