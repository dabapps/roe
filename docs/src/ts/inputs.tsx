import * as React from 'react';

import {
  Button,
  Column,
  FormGroup,
  InputGroup,
  InputGroupAddon,
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
          Form Group Inline
        </p>
        <FormGroup>
          <label>
            Label
          </label>
          <input type="text" placeholder="Placeholder" />
          <input type="text" placeholder="Placeholder" disabled />
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
  </div>
);
