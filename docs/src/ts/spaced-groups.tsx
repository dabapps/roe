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
        <p>
          <SpacedGroup>
            <Button>
              Cancel
            </Button>
            <Button type="primary">
              Continue
            </Button>
          </SpacedGroup>
        </p>
        <p>
          <SpacedGroup>
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
            <p>
              <SpacedGroup>
                <Button>
                  Cancel
                </Button>
                <Button type="primary">
                  Continue
                </Button>
              </SpacedGroup>
            </p>
            <p>
              <SpacedGroup>
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
            </p>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default SpacedGroups;
