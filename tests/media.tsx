import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Media, MediaBody, MediaFigure } from '../src/ts/';

describe('Media', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Media>
        <MediaFigure>
          <img src="/images/sample-image.png" />
        </MediaFigure>
        <MediaBody>
          <p>Content</p>
        </MediaBody>
      </Media>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Media reversed>
        <MediaFigure>
          <img src="/images/sample-image.png" />
        </MediaFigure>
        <MediaBody>
          <p>Content</p>
        </MediaBody>
      </Media>
    );

    expect(tree).toMatchSnapshot();
  });
});

describe('MediaFigure', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <MediaFigure>
        <img src="/images/sample-image.png" />
      </MediaFigure>
    );

    expect(tree).toMatchSnapshot();
  });
});

describe('MediaBody', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(<MediaBody>Something</MediaBody>);

    expect(tree).toMatchSnapshot();
  });
});
