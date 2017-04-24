import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Row } from '../row';

describe('Row', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Row />
    );

    expect(tree).toMatchSnapshot();
  });

});
