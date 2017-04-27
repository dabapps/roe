import * as React from 'react';

import {
  CodeBlock,
  Column,
  Container,
  Row
} from '../../../src/ts';

export const Columns = () => (
  <div>
    <Row>
      <Column>
        <h2>
          Columns
        </h2>
      </Column>
    </Row>
    <Row>
      <Column xs={12} sm={6} md={3}>
        Column 1
      </Column>
      <Column xs={12} sm={6} md={3}>
        Column 2
      </Column>
      <Column xs={12} sm={6} md={3}>
        Column 3
      </Column>
    </Row>
    <Row>
      <Column>
        <CodeBlock>
          {`
          <Container>
            <Row>
              <Column xs={12} sm={6} md={3}>
                Column 1
              </Column>
              <Column xs={12} sm={6} md={3}>
                Column 2
              </Column>
              <Column xs={12} sm={6} md={3}>
                Column 3
              </Column>
            </Row>
          </Container>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </div>
);
