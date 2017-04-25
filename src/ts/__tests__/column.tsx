import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Column } from '../';

describe('Column', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Column />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Column className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});
