import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  Column,
  Highlight,
  InputGroup,
  InputGroupAddon,
  Row,
} from '../src/ts/';

describe('Highlight', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Highlight>
        <input type="number" />
      </Highlight>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (open)', () => {
    const tree = renderer.create(
      <Row>
        <Column>
          <Highlight open>
            <InputGroup>
              <input type="number" />
            </InputGroup>
          </Highlight>
        </Column>
      </Row>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (open, disabled, backgroundColor)', () => {
    const tree = renderer.create(
      <Row>
        <Column>
          <Highlight open disabled backgroundColor="white">
            <InputGroup>
              <InputGroupAddon>£</InputGroupAddon>
              <input type="number" />
            </InputGroup>
          </Highlight>
        </Column>
      </Row>
    );

    expect(tree).toMatchSnapshot();
  });
});
