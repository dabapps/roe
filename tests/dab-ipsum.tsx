import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { DabIpsum } from '../src/ts/';
import { generateIpsum, resetRandomSeed } from '../src/ts/dab-ipsum';

describe('DabIpsum', () => {

  beforeEach(() => {
    resetRandomSeed();
  })

  it('should render some paragraphs by default', () => {
    const tree = renderer.create(
      <DabIpsum />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should allow setting how many items to render', () => {
    const tree = renderer.create(
      <DabIpsum count={3} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should allow rendering an unordered list', () => {
    const tree = renderer.create(
      <DabIpsum type="ul" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should allow rendering an ordered list', () => {
    const tree = renderer.create(
      <DabIpsum type="ol" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should allow rendering plain text (in a span)', () => {
    const tree = renderer.create(
      <DabIpsum type="text" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should generate some ipsum', () => {
    const ipsum = generateIpsum();

    expect(ipsum).toMatchSnapshot();
  });

  it('should only update if type or count changed', () => {
    const instance = new DabIpsum({type: 'text', count: 1});

    expect(instance.shouldComponentUpdate({type: 'text', count: 1})).toBe(false);
    expect(instance.shouldComponentUpdate({type: 'p', count: 1})).toBe(true);
    expect(instance.shouldComponentUpdate({type: 'text', count: 2})).toBe(true);
  });

});
