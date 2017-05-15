import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Alert } from '../src/ts/';

describe('Alert', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Alert />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Alert className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

});
