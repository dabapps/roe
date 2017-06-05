import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Anchor } from '../src/ts/';
import { getHref } from '../src/ts/anchor';

describe('Anchor', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Anchor />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Anchor className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should have an id and href', () => {
    const tree = renderer.create(
      <Anchor href="my-href" />
    );

    expect(tree).toMatchSnapshot();
  });

  describe('getHref', () => {

    it('should return a suitable href', () => {
      expect(getHref()).toBe(undefined);
      expect(getHref('nope', 'yup')).toBe('yup');
      expect(getHref('yup', undefined)).toBe('yup');
      expect(getHref('A regular text string - oh, special chars')).toBe('a-regular-text-string-oh-special-chars');
      expect(getHref(' - Leading and trailing whitespace ,; ')).toBe('leading-and-trailing-whitespace');
    });

  });

});
