import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PaginationDisplay } from '../src/ts';

describe('PaginationDisplay', () => {
  it('should match snapshot with a text (Showing), item count and indication of diplaying 3 items', () => {
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
