import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Speech } from '../src/ts/components/speech/speech';

describe('Speech', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Speech sent>
        I love kittens!
      </Speech>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Speech received>
        I love puggs!
      </Speech>
    );

    expect(tree).toMatchSnapshot();
  });

});
