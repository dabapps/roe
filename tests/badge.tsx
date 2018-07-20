import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Badge } from '../src/ts/components/badge';

describe('Badge', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Badge>Default</Badge>);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Badge className="primary">Primary</Badge>);

    expect(tree).toMatchSnapshot();
  });
});
