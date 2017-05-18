import * as React from 'react';

import {
  CodeBlock,
  Column,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Row,
  Section
} from '../../../src/ts';

export const Inputs = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Inputs
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <p>
          Input
        </p>
        <input type="text" placeholder="Placeholder" />
        <input type="text" placeholder="Placeholder" disabled />
        <input type="text" className="error" placeholder="Placeholder" />
        <input type="text" className="error" placeholder="Placeholder" disabled />

        <p>
          Select
        </p>
        <select>
          <option>
            Option
          </option>
        </select>
        <select disabled>
          <option>
            Option
          </option>
        </select>
        <select className="error">
          <option>
            Option
          </option>
        </select>
        <select className="error" disabled>
          <option>
            Option
          </option>
        </select>

        <p>
          Form Group Inline
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <input type="text" />
        </FormGroup>

        <p>
          Form Group Block
        </p>
        <FormGroup block>
          <label>
            Label
          </label>
          <select>
            <option>
              Option
            </option>
          </select>
        </FormGroup>

        <p>
          Input Group with Input Group Addons
        </p>
        <InputGroup>
          <InputGroupAddon>
            $
          </InputGroupAddon>
          <input type="number" />
          <InputGroupAddon>
            .00
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupAddon>
            $
          </InputGroupAddon>
          <input type="number" />
        </InputGroup>

        <InputGroup>
          <input type="number" />
          <InputGroupAddon>
            .00
          </InputGroupAddon>
        </InputGroup>
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
              Input
            </p>
            <input type="text" placeholder="Placeholder" />
            <input type="text" placeholder="Placeholder" disabled />
            <input type="text" className="error" placeholder="Placeholder" />
            <input type="text" className="error" placeholder="Placeholder" disabled />

            <p>
              Select
            </p>
            <select>
              <option>
                Option
              </option>
            </select>
            <select disabled>
              <option>
                Option
              </option>
            </select>
            <select className="error">
              <option>
                Option
              </option>
            </select>
            <select className="error" disabled>
              <option>
                Option
              </option>
            </select>

            <FormGroup>
              <label>
                Label
              </label>
              <input type="text" />
            </FormGroup>

            <FormGroup block>
              <label>
                Label
              </label>
              <select>
                <option>
                  Option
                </option>
              </select>
            </FormGroup>

            <InputGroup>
              <InputGroupAddon>
                $
              </InputGroupAddon>
              <input type="number" />
            </InputGroup>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);
