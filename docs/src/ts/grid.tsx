import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

const Grid = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Grid
        </h2>
      </Column>
    </Row>
    <Row>
      <Column className="display-columns">
        <h3>
          Demo
        </h3>
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
          <Column xs={6} xsPush={6}>
            Column 4
          </Column>
          <Column xs={6} xsPull={6}>
            Column 5
          </Column>
        </Row>
        <Row>
          <Column xs={6} xsOffset={3} xsFill={3}>
            Column 6
          </Column>
          <Column xs={6} xsOffset={3} xsFill={3}>
            Column 7
          </Column>
        </Row>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript" name="JSX">
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
            <Row>
              <Column xs={6} xsPush={6}>
                Column 4
              </Column>
              <Column xs={6} xsPull={6}>
                Column 5
              </Column>
            </Row>
            <Row>
              <Column xs={6} xsOffset={3} xsFill={3}>
                Column 6
              </Column>
              <Column xs={6} xsOffset={3} xsFill={3}>
                Column 7
              </Column>
            </Row>
          </Container>
          `}
        </CodeBlock>

        <p>
          Container may also take a `fluid` prop that makes it fill the screen at all sizes
        </p>

        <CodeBlock language="javascript" name="JSX">
          {`
          <Container fluid />
          `}
        </CodeBlock>

        <p>
          You can configure the @container-background if the container is set to solid
        </p>

        <CodeBlock language="javascript" name="JSX">
          {`
            <Container solid />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Grid;
