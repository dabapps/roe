import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { PaginationDisplay } from '../src/ts/components/pagination/pagination-display';

describe('Banner', () => {
  it('should match snapshot', () => {
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
