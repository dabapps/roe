import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

export const AtomicText = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Atomic Text Classes
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <p className="font-size-h1">
          Paragraph with header size
        </p>
        <p>
          <span className="bold">
            Bold
          </span> <span className="italic">
            Italic
          </span> <span className="bold italic">
            Bold Italic
          </span>
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
            <p className="font-size-h1">
              Paragraph with header size
            </p>
            <p>
              <span className="bold">
                Bold
              </span> <span className="italic">
                Italic
              </span> <span className="bold italic">
                Bold Italic
              </span>
            </p>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
