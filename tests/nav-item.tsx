import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { NavItem } from '../src/ts/';

describe('NavItem', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<NavItem />);

    expect(tree).toMatchSnapshot();
  });

  it('should accept regular element attributes', () => {
    const tree = renderer.create(<NavItem className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply an active class', () => {
    const tree = renderer.create(<NavItem active />);

    expect(tree).toMatchSnapshot();
  });
});
