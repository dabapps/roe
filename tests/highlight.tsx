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
        <p>Hello, World!</p>
      </Highlight>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (open)', () => {
    const tree = renderer.create(
      <Highlight open>
        <p>Hello, World!</p>
      </Highlight>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (open, disabled, backgroundColor)', () => {
    const tree = renderer.create(
      <Highlight open disabled backgroundColor="white">
        <p>Hello, World!</p>
      </Highlight>
    );

    expect(tree).toMatchSnapshot();
  });
});
