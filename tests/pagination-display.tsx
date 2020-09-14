import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PaginationDisplay } from '../src/ts';

describe('PaginationDisplay', () => {
  it('should render the text "Showing 24-26 of 26"', () => {
    const tree = renderer.create(
      <PaginationDisplay
        className="margin-top-base"
        pageSize={3}
        currentPageNumber={9}
        itemCount={26}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
