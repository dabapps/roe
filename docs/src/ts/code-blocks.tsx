import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const CodeBlocks = () => (
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

        <CodeBlock language="javascript" name="Example">
          {`
            const foo = 'bar';

            console.log(foo);
          `}
        </CodeBlock>

        <p>
          If name is not supplied the code block will be rendered like the one below.
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
            <CodeBlock language="javascript" name="Example">
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

export default CodeBlocks;
