import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { InputGroupAddon } from '../src/ts/';

describe('InputGroupAddon', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <InputGroupAddon />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <InputGroupAddon className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

});
