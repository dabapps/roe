import * as React from 'react';

import {
  CodeBlock,
  Column,
  ContentBox,
  ContentBoxHeader,
  Row,
  Section
} from '../../../src/ts';

const ContentBoxes = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Content Box
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <ContentBox>
          <ContentBoxHeader>
            <h5>
              Header
            </h5>
          </ContentBoxHeader>
          <p>
            Content
          </p>
        </ContentBox>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript" name="JSX">
          {`
            <ContentBox>
              <ContentBoxHeader>
                <h5>
                  Header
                </h5>
              </ContentBoxHeader>
              <p>
                Content
              </p>
            </ContentBox>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default ContentBoxes;
