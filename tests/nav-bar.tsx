import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NavBar from '../src/ts/components/navigation/nav-bar';

describe('NavBar', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <NavBar />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <NavBar className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply fixed class', () => {
    const tree = renderer.create(
      <NavBar fixed />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply shy class', () => {
    const tree = renderer.create(
      <NavBar shy />
    );

    expect(tree).toMatchSnapshot();
  });

});
