import * as React from 'react';

import {
  Button,
  CodeBlock,
  Column,
  Row
} from '../../../src/ts';

export const Buttons = () => (
  <div>
    <Row>
      <Column>
        <h2>
          Buttons
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <Button>
          Default
        </Button>
        <Button type="primary">
          Primary
        </Button>
        <Button type="secondary">
          Secondary
        </Button>
        <Button type="tertiary">
          Tertiary
        </Button>
        <Button block>
          Block
        </Button>
      </Column>
    </Row>
    <Row>
      <Column>
        <CodeBlock language="javascript">
          {`
            <Button>
              Default
            </Button>
            <Button type="primary">
              Primary
            </Button>
            <Button type="secondary">
              Secondary
            </Button>
            <Button type="tertiary">
              Tertiary
            </Button>
            <Button block>
              Block
            </Button>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </div>
);
