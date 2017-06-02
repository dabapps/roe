import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { ContentBox, ContentBoxHeader } from '../src/ts/';

describe('ContentBox', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <ContentBox>
        <ContentBoxHeader>
          <h1>
            Header
          </h1>
        </ContentBoxHeader>
        <p>
          Content
        </p>
      </ContentBox>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <ContentBox className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});

describe('ContentBoxHeader', () => {

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <ContentBoxHeader className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});
