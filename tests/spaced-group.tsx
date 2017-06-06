import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SpacedGroup } from '../src/ts/';

describe('SpacedGroup', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <SpacedGroup />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <SpacedGroup className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});
