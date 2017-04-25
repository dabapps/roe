import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Column } from '../src/ts/';

describe('Column', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Column />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Column className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

});
