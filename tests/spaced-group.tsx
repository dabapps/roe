import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SpacedGroup } from '../src/ts';

describe('SpacedGroup', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<SpacedGroup />);

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional large prop', () => {
    const tree = renderer.create(<SpacedGroup large />);

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional small prop', () => {
    const tree = renderer.create(<SpacedGroup small />);

    expect(tree).toMatchSnapshot();
  });

  it('should use a block prop (boolean) as a class name', () => {
    const tree = renderer.create(<SpacedGroup block />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<SpacedGroup className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
