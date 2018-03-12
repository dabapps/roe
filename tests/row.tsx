import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Row } from '../src/ts/';

describe('Row', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Row />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Row className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
