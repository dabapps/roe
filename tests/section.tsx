import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Section } from '../src/ts/';

describe('Section', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Section />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Section className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
