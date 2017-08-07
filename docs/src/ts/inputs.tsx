import * as React from 'react';

import {
  Anchor,
  CodeBlock,
  Column,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Row,
  Section
} from '../../../src/ts';

const Inputs = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Inputs
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
          Textarea
        </p>
        <textarea />

        <p>
          Input
        </p>
        <input type="text" placeholder="Placeholder" />
        <input type="text" placeholder="Placeholder" disabled />
        <input type="text" className="error" placeholder="Placeholder" />
        <input type="text" className="error" placeholder="Placeholder" disabled />

        <p>
          Checkbox
        </p>
        <input type="checkbox" />
        <input type="checkbox" disabled />
        <input type="checkbox" className="error" />
        <input type="checkbox" className="error" disabled />

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
          Form Group Inline Custom Elements
        </p>
        <FormGroup>
          <a className="label">
            Custom Label
          </a>
          <div className="input">
            Custom Input
          </div>
        </FormGroup>

        <p>
          Form Group Inline Checkbox
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <input type="checkbox" />
        </FormGroup>

        <p>
          Form Group Inline Radio
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <input type="radio" />
        </FormGroup>

        <p>
          Form Group Inline Checkbox / Radio Alternative
        </p>
        <FormGroup>
          <input type="checkbox" />
          <label>
            Label
          </label>
        </FormGroup>

        <p>
          Form Group Block
        </p>
        <FormGroup block>
          <label>
            Label
          </label>
          <input type="text" />
        </FormGroup>

        <p>
          Form Group Block Checkbox
        </p>
        <FormGroup block>
          <label>
            Label
          </label>
          <input type="checkbox" />
        </FormGroup>

        <p>
          Form Group Block Radio
        </p>
        <FormGroup block>
          <label>
            Label
          </label>
          <input type="radio" />
        </FormGroup>

        <p>
          Form Group Inline Textarea
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <textarea />
        </FormGroup>

        <p>
          Form Group Block Textarea
        </p>
        <FormGroup block>
          <label>
            Label
          </label>
          <textarea />
        </FormGroup>

        <p>
          Input Group with Input Group Addons
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <InputGroup>
            <InputGroupAddon>
              $
            </InputGroupAddon>
            <input type="number" />
            <InputGroupAddon>
              .00
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <label>
            Label
          </label>
          <InputGroup>
            <InputGroupAddon>
              $
            </InputGroupAddon>
            <input type="number" />
          </InputGroup>
        </FormGroup>

        <FormGroup block>
          <label>
            Label
          </label>
          <InputGroup>
            <input type="number" />
            <InputGroupAddon>
              .00
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <p>
          Note: you can use the class names "input", "select", "label", and "button" so that FormGroup & InputGroup
          styles can be applied to custom elements.
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
              Form Group Inline
            </p>
            <FormGroup>
              <label>
                Label
              </label>
              <input type="text" />
            </FormGroup>

            <p>
              Form Group Inline Custom Elements
            </p>
            <FormGroup>
              <a className="label">
                Custom Label
              </a>
              <div className="input">
                Custom Input
              </div>
            </FormGroup>

            <p>
              Form Group Inline Checkbox
            </p>
            <FormGroup>
              <label>
                Label
              </label>
              <input type="checkbox" />
            </FormGroup>

            <p>
              Form Group Inline Radio
            </p>
            <FormGroup>
              <label>
                Label
              </label>
              <input type="radio" />
            </FormGroup>

            <p>
              Form Group Inline Checkbox / Radio Alternative
            </p>
            <FormGroup>
              <input type="checkbox" />
              <label>
                Label
              </label>
            </FormGroup>

            <p>
              Form Group Block
            </p>
            <FormGroup block>
              <label>
                Label
              </label>
              <input type="text" />
            </FormGroup>

            <p>
              Form Group Block Checkbox
            </p>
            <FormGroup block>
              <label>
                Label
              </label>
              <input type="checkbox" />
            </FormGroup>

            <p>
              Form Group Block Radio
            </p>
            <FormGroup block>
              <label>
                Label
              </label>
              <input type="radio" />
            </FormGroup>

            <p>
              Form Group Inline Textarea
            </p>
            <FormGroup>
              <label>
                Label
              </label>
              <textarea />
            </FormGroup>

            <p>
              Form Group Block Textarea
            </p>
            <FormGroup block>
              <label>
                Label
              </label>
              <textarea />
            </FormGroup>

            <p>
              Input Group with Input Group Addons
            </p>
            <FormGroup>
              <label>
                Label
              </label>
              <InputGroup>
                <InputGroupAddon>
                  $
                </InputGroupAddon>
                <input type="number" />
                <InputGroupAddon>
                  .00
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <label>
                Label
              </label>
              <InputGroup>
                <InputGroupAddon>
                  $
                </InputGroupAddon>
                <input type="number" />
              </InputGroup>
            </FormGroup>

            <FormGroup block>
              <label>
                Label
              </label>
              <InputGroup>
                <input type="number" />
                <InputGroupAddon>
                  .00
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Inputs;
