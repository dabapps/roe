import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Collapse } from '../src/ts/';

describe('Collapse', () => {

  const createNodeMock = () => ({
    scrollHeight: 500
  });

  it('should match snapshot when collapsed', () => {
    const tree = renderer.create(
      <Collapse open={false} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when expanded', () => {
    const tree = renderer.create(
      <Collapse open />,
      {createNodeMock}
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with custom collapsed height', () => {
    const tree = renderer.create(
      <Collapse open={false} maxCollapsedHeight={100} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with fade out', () => {
    const tree = renderer.create(
      <Collapse open={false} fadeOut />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Collapse open={false} className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});
