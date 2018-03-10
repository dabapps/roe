import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Nav from '../src/ts/components/navigation/nav';

describe('Nav', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(<Nav />);

    expect(tree).toMatchSnapshot();
  });

  it('should accept regular element attributes', () => {
    const tree = renderer.create(<Nav className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

});
