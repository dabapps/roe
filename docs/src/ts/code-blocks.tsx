import * as React from 'react';

import {
  Anchor,
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
          <Anchor>
            Code Blocks
          </Anchor>
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

        <p>
          If a language is supplied (recommended) it will display to the right of the name.
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
