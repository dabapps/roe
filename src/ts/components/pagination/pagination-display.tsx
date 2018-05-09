import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
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
   * current page number
   */
  currentPageNumber: number;
  /**
   * total number of items to display
   */
  itemCount: number;
}

export class PaginationDisplay extends PureComponent<
  PaginationDisplayProps,
  {}
> {
  public render() {
    const {
      className,
      itemCount,
      pageSize,
      currentPageNumber,
      ...remainingProps
    } = this.props;

    return (
      <p
        {...remainingProps}
        className={classNames('pagination-display', className)}
      >
        Showing {this.showingLowerCount()}-{this.showingUpperCounte()} of{' '}
        {itemCount}
      </p>
    );
  }

  private showingLowerCount = () => {
    const { currentPageNumber, pageSize } = this.props;
    return (currentPageNumber - 1) * pageSize || 1;
  };

  private showingUpperCounte = () => {
    const { pageSize, currentPageNumber, itemCount } = this.props;
    return pageSize * currentPageNumber > itemCount
      ? itemCount
      : pageSize * currentPageNumber;
  };
}

export default PaginationDisplay;
