import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { InputGroup } from '../src/ts/';

describe('InputGroup', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<InputGroup />);

    expect(tree).toMatchSnapshot();
  });

  it('should use a block prop (boolean) as a class name', () => {
    const tree = renderer.create(<InputGroup block />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<InputGroup className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
