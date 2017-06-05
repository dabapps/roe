import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const AtomicSpacing = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Atomic Padding & Margin Classes
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <div className="padding-base">
          Padding all around
        </div>
        <div className="md-padding-left-large">
          Large padding left on medium screens and above
        </div>
        <div className="margin-left-base sm-margin-left-none">
          Margin left only only small screens
        </div>
        <div className="margin-vertical-small">
          Small vertical margin
        </div>
        <div className="margin-horizontal-large">
          Large horizontal margin
        </div>
        <p>
          Note: padding-base is an alias for xs-padding-base, and margin-right-small an alias for xs-margin-right-small,
          etc
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
            <div className="padding-base">
              Padding all around
            </div>
            <div className="md-padding-left-large">
              Large padding left on medium screens and above
            </div>
            <div className="margin-left-base sm-margin-left-none">
              Margin left only only small screens
            </div>
            <div className="margin-vertical-small">
              Small vertical margin
            </div>
            <div className="margin-horizontal-large">
              Large horizontal margin
            </div>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default AtomicSpacing;
