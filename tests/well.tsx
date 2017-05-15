import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Well } from '../src/ts/';

describe('Well', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Well />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Well className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

});
