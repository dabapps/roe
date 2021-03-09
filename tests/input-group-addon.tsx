import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { InputGroupAddon } from '../src/ts';

describe('InputGroupAddon', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<InputGroupAddon />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<InputGroupAddon className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply width to the element', () => {
    const tree = renderer.create(
      <InputGroupAddon width={100} style={{ color: 'red' }} />
    );

    expect(tree).toMatchSnapshot();
  });
});
