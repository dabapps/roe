import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Container } from '../src/ts/';

describe('Container', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Container />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take an optional fluid prop', () => {
    const tree = renderer.create(
      <Container fluid />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Container className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

});
