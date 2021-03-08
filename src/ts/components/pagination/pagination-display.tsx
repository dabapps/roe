import * as classNames from 'classnames';
import * as React from 'react';

import { ComponentProps } from '../../types';

export interface PaginationDisplayProps extends ComponentProps {
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

const PaginationDisplay = (props: PaginationDisplayProps) => {
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

export default React.memo(PaginationDisplay);
