import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { DabIpsum } from '../src/ts';
import { generateIpsum, resetRandomSeed } from '../src/ts/utils';
import { WORDS } from '../src/ts/words';

describe('DabIpsum', () => {
  beforeEach(() => {
    resetRandomSeed();
  });

  it('should render some paragraphs by default', () => {
    const tree = renderer.create(<DabIpsum />);

    expect(tree).toMatchSnapshot();
  });

  it('should allow setting how many items to render', () => {
    const tree = renderer.create(<DabIpsum count={3} />);

    expect(tree).toMatchSnapshot();
  });

  it('should allow rendering an unordered list', () => {
    const tree = renderer.create(<DabIpsum component="ul" />);

    expect(tree).toMatchSnapshot();
  });

  it('should allow rendering an ordered list', () => {
    const tree = renderer.create(<DabIpsum component="ol" />);

    expect(tree).toMatchSnapshot();
  });

  it('should allow rendering plain text (in a span)', () => {
    const tree = renderer.create(<DabIpsum component="text" />);

    expect(tree).toMatchSnapshot();
  });

  it('should generate some ipsum', () => {
    const ipsum = generateIpsum(WORDS);

    expect(ipsum).toMatchSnapshot();
  });

  it('should only update if type or count changed', () => {
    const instance = new DabIpsum({ component: 'text', count: 1 });

    expect(
      instance.shouldComponentUpdate({ component: 'text', count: 1 })
    ).toBe(false);
    expect(instance.shouldComponentUpdate({ component: 'p', count: 1 })).toBe(
      true
    );
    expect(
      instance.shouldComponentUpdate({ component: 'text', count: 2 })
    ).toBe(true);
  });
});
