import * as React from 'react';

import {
  Button,
  Column,
  FormGroup,
  InputGroup,
  Row
} from '../../../src/ts';

export const Inputs = () => (
  <div>
    <Row>
      <Column>
        <h2>
          Inputs
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <p>
          Inline
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <input type="text" />
        </FormGroup>

        <p>
          Block
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
          Inline With Input Group
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <InputGroup>
            <input type="text" />
            <Button>
              Button
            </Button>
          </InputGroup>
        </FormGroup>

        <p>
          Block With Input Group
        </p>
        <FormGroup block>
          <label>
            Label
          </label>
          <InputGroup>
            <input type="text" />
            <Button>
              Button
            </Button>
          </InputGroup>
        </FormGroup>
      </Column>
    </Row>
  </div>
);
