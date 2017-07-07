import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const AtomicTextAlign = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Atomic Text Align Classes
          </Anchor>
        </h2>
      </Column>
    </Row>
    <Row>
      <Column className="display-columns">
        <h3>
          Demo
        </h3>
        <p className="text-align-left">
          Left
        </p>
        <p className="text-align-center">
          Center
        </p>
        <p className="text-align-right">
          Right
        </p>
        <p className="xs-text-align-center sm-text-align-left">
          Centered on mobile
        </p>
        <p>
          Note: text-align-left is an alias for xs-text-align-left, same with right and center
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
            <p className="text-align-left">
              Left
            </p>
            <p className="text-align-center">
              Center
            </p>
            <p className="text-align-right">
              Right
            </p>
            <p className="xs-text-align-center sm-text-align-left">
              Centered on mobile
            </p>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicTextAlign;
