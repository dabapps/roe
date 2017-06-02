import * as React from 'react';

import {
  CodeBlock,
  Column,
  ContentBox,
  ContentBoxHeader,
  Row,
  Section,
  Tab,
  Tabs,
  Well
} from '../../../src/ts';

export const TabDemo = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Tabs
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <Tabs>
          <Tab active>
            <a>
              Tab 1
            </a>
          </Tab>
          <Tab>
            <a>
              Tab 2
            </a>
          </Tab>
          <Tab>
            <a>
              Tab 3
            </a>
          </Tab>
        </Tabs>
        <ContentBox>
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
        <CodeBlock language="javascript">
          {`
            <Tabs>
              <Tab active>
                <a>
                  Tab 1
                </a>
              </Tab>
              <Tab>
                <a>
                  Tab 2
                </a>
              </Tab>
              <Tab>
                <a>
                  Tab 3
                </a>
              </Tab>
            </Tabs>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
