import * as classNames from 'classnames';
import * as React from 'react';

import { OptionalComponentPropAndHTMLAttributes } from '../../types';

export type PaginationDisplayProps = {
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
} & OptionalComponentPropAndHTMLAttributes;

const PaginationDisplay = (props: PaginationDisplayProps) => {
  const {
    className,
    itemCount,
    pageSize,
    currentPageNumber,
    component: Component = 'p',
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
    <Component
      {...remainingProps}
      className={classNames('pagination-display', className)}
    >
      Showing {showingLowerCount()}-{showingUpperCount()} of {itemCount}
    </Component>
  );
};

export default React.memo(PaginationDisplay);
