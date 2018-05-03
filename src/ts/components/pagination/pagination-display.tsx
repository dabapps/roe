import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface PaginationDisplayProps extends ComponentProps {
  /**
   * className
   * @default
   */
  className?: string;
  /**
   * pageSize
   * @default
   */
  pageSize: number;
  /**
   * currentPage
   * @default
   */
  currentPage: number;
  /**
   * itemCount
   * @default
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
      currentPage,
      ...remainingProps
    } = this.props;

    return (
      <p
        {...remainingProps}
        className={classNames('pagination-display', className)}
      >
        Showing {this.showingLowerCount()}-{this.showingUpperCounter()} of{' '}
        {itemCount}
      </p>
    );
  }

  private showingLowerCount = () => {
    const { currentPage, pageSize } = this.props;
    return (currentPage - 1) * pageSize || 1;
  };

  private showingUpperCounter = () => {
    const { pageSize, currentPage, itemCount } = this.props;
    return pageSize * currentPage > itemCount
      ? itemCount
      : pageSize * currentPage;
  };
}

export default PaginationDisplay;
