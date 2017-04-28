import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row
} from '../../../src/ts';

export const CodeBlocks = () => (
  <div>
    <Row>
      <Column>
        <h2>
          Code Blocks
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
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
        <CodeBlock language="javascript">
          {`
            <CodeBlock language="javascript">
              {\`
                const foo = 'bar';
              \`}

              console.log(foo);
            </CodeBlock>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </div>
);
