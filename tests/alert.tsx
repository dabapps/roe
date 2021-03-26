import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Alert } from '../src/ts';

describe('Alert', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Alert />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Alert className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
