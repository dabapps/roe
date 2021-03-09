import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

export interface PaginationDisplayProps {
  /**
   * className
   */
  className?: string;
  /**
   * items count per page
   */
  pageSize: number;
  /**
   * current page number (1 indexed)
   */
  currentPageNumber: number;
  /**
   * total number of items to display
   */
  itemCount: number;
}

const PaginationDisplay: FunctionComponentOptionalComponentProp<
  'div',
  PaginationDisplayProps
> = (props: OptionalComponentProp<'div'> & PaginationDisplayProps) => {
  const {
    className,
    itemCount,
    pageSize,
    currentPageNumber,
    ...remainingProps
  } = props;

  const showingLowerCount = React.useCallback(() => {
    return (currentPageNumber - 1) * pageSize || 1;
  }, [currentPageNumber, pageSize]);

  const showingUpperCount = React.useCallback(() => {
    return pageSize * currentPageNumber > itemCount
      ? itemCount
      : pageSize * currentPageNumber;
  }, [pageSize, currentPageNumber, itemCount]);

  return (
    <p
      {...remainingProps}
      className={classNames('pagination-display', className)}
    >
      Showing {showingLowerCount()}-{showingUpperCount()} of {itemCount}
    </p>
  );
};

export default memoWithComponentProp(PaginationDisplay);
