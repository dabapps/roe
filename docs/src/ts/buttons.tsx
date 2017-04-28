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
        <p>
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
        </p>

        <p>
          <Button block>
            Block
          </Button>
        </p>

        <p>
          <Button large>
            Default
          </Button>
          <Button large type="primary">
            Primary
          </Button>
          <Button large type="secondary">
            Secondary
          </Button>
          <Button large type="tertiary">
            Tertiary
          </Button>
        </p>
      </Column>
    </Row>
    <Row>
      <Column>
        <CodeBlock language="javascript">
          {`
            <p>
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
            </p>

            <p>
              <Button block>
                Block
              </Button>
            </p>

            <p>
              <Button large>
                Default
              </Button>
              <Button large type="primary">
                Primary
              </Button>
              <Button large type="secondary">
                Secondary
              </Button>
              <Button large type="tertiary">
                Tertiary
              </Button>
            </p>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </div>
);
