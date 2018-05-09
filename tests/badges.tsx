import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Badge } from '../src/ts/components/badges/badge';

describe('Badge', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Badge>default</Badge>);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Badge className="primary">primary</Badge>);

    expect(tree).toMatchSnapshot();
  });
});
