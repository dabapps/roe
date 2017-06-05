import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const AtomicFloats = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Atomic Float Classes
        </h2>
      </Column>
    </Row>
    <Row>
      <Column className="display-columns">
        <h3>
          Demo
        </h3>
        <Row>
          <Column xs={6} className="xs-float-right sm-float-left md-float-right">
            float-right sm-float-left md-float-right
          </Column>
          <Column xs={6} className="xs-float-left sm-float-right md-float-left">
            float-left sm-float-right md-float-left
          </Column>
        </Row>
        <p>
          Note: float-left is an alias for xs-float-left, and float-right an alias for xs-float-right
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
            <Row>
              <Column xs={6} className="xs-float-right sm-float-left md-float-right">
                float-right sm-float-left md-float-right
              </Column>
              <Column xs={6} className="xs-float-left sm-float-right md-float-left">
                float-left sm-float-right md-float-left
              </Column>
            </Row>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicFloats;
