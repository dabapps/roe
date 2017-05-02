import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { InputGroup } from '../src/ts/';

describe('InputGroup', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <InputGroup />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <InputGroup className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

});
