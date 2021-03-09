import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Well } from '../src/ts';

describe('Well', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Well />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Well className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
