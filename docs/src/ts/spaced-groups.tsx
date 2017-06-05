import * as React from 'react';

import {
  Button,
  CodeBlock,
  Column,
  Row,
  Section,
  SpacedGroup
} from '../../../src/ts';

const SpacedGroups = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Spaced Groups
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>

        <SpacedGroup className="margin-vertical-large">
          <Button>
            Cancel
          </Button>
          <Button type="primary">
            Continue
          </Button>
        </SpacedGroup>

        <SpacedGroup className="margin-vertical-large">
          <a>
            Link 1
          </a>
          <a>
            Link 2
          </a>
          <a>
            Link 3
          </a>
        </SpacedGroup>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript">
          {`
            <SpacedGroup className="margin-vertical-large">
              <Button>
                Cancel
              </Button>
              <Button type="primary">
                Continue
              </Button>
            </SpacedGroup>

            <SpacedGroup className="margin-vertical-large">
              <a>
                Link 1
              </a>
              <a>
                Link 2
              </a>
              <a>
                Link 3
              </a>
            </SpacedGroup>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default SpacedGroups;
