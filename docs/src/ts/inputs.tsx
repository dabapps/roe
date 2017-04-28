import * as React from 'react';

import {
  Button,
  Column,
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
        <label>
          Label
        </label>
        <input type="text" />

        <label>
          Label
        </label>
        <select>
          <option>
            Option
          </option>
        </select>
      </Column>
    </Row>
  </div>
);
