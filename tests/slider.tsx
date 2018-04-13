import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Slider } from '../src/ts/components/slider';

describe('Slider', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Slider
        onSlide={jest.fn()}
      />
    );

    expect(tree).toMatchSnapshot();
  });

});
