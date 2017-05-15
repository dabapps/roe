import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

export const CodeBlocks = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Code Blocks
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <CodeBlock language="javascript">
          {`
            const foo = 'bar';

            console.log(foo);
          `}
        </CodeBlock>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript">
          {`
            <CodeBlock language="javascript">
              {\`
                const foo = 'bar';

                console.log(foo);
              \`}
            </CodeBlock>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
