import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AppRoot from '../src/ts/components/app/root';

describe('AppRoot', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should accept regular element attributes', () => {
    const tree = renderer.create(<AppRoot className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

});
