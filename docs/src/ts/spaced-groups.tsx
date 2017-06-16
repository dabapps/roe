import * as React from 'react';

import {
  Anchor,
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
          <Anchor>
            Spaced Groups
          </Anchor>
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
            <Button className="primary">
              Continue
            </Button>
          </SpacedGroup>
        </p>

        <p>
          <SpacedGroup large block>
            <Button>
              Cancel
            </Button>
            <Button className="error">
              Delete
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
        <CodeBlock language="javascript" name="JSX">
          {`
            <p>
              <SpacedGroup>
                <Button>
                  Cancel
                </Button>
                <Button className="primary">
                  Continue
                </Button>
              </SpacedGroup>
            </p>

            <p>
              <SpacedGroup large block>
                <Button>
                  Cancel
                </Button>
                <Button className="error">
                  Delete
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
