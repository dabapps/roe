import * as React from 'react';

import {
  Button,
  CodeBlock,
  Column,
  Row,
  Section
} from '../../../src/ts';

export const Buttons = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Buttons
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <p>
          <Button>
            Default
          </Button>
          <Button disabled>
            Disabled
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
          <Button type="info">
            Info
          </Button>
          <Button type="success">
            Success
          </Button>
          <Button type="warning">
            Warning
          </Button>
          <Button type="error">
            Error
          </Button>
        </p>

        <p>
          <Button block>
            Block
          </Button>
          <Button block type="primary">
            Block Primary
          </Button>
        </p>

        <p>
          <Button small>
            Small
          </Button>
        </p>

        <p>
          <Button large>
            Large
          </Button>
        </p>

        <p>
          <a href="#" className="button">
            Link as button
          </a>
          <a href="#" className="button primary">
            Link as primary button
          </a>
          <a href="#" className="button error">
            Link as error button
          </a>
        </p>

        <p>
          <input className="button" type="button" value="Input as button" />
          <input className="button primary" type="button" value="Input as primary button" />
          <input className="button error" type="button" value="Input as error button" />
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
              <Button>
                Default
              </Button>
              <Button disabled>
                Disabled
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
              <Button type="info">
                Info
              </Button>
              <Button type="success">
                Success
              </Button>
              <Button type="warning">
                Warning
              </Button>
              <Button type="error">
                Error
              </Button>
            </p>

            <p>
              <Button block>
                Block
              </Button>
              <Button block type="primary">
                Block Primary
              </Button>
            </p>

            <p>
              <Button small>
                Small
              </Button>
            </p>

            <p>
              <Button large>
                Large
              </Button>
            </p>

            <p>
              <a href="#" className="button">
                Link as button
              </a>
              <a href="#" className="button primary">
                Link as primary button
              </a>
              <a href="#" className="button error">
                Link as error button
              </a>
            </p>

            <p>
              <input className="button" type="button" value="Input as button" />
              <input className="button primary" type="button" value="Input as primary button" />
              <input className="button error" type="button" value="Input as error button" />
            </p>
          `}
        </CodeBlock>

        <p>
          You can create custom buttons using the create button mixin e.g.
        </p>
        <CodeBlock language="less">
          {`
            .button {
              .create-button(custom, @background-color, @text-color);
            }
          `}
        </CodeBlock>

        <p>
          And then use these with custom types e.g.
        </p>
        <CodeBlock language="javascript">
          {`
            <Button type="custom" />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
