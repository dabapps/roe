import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../types';
import Button from './forms/button';
import SpacedGroup from './spaced-group';

export interface PaginationProps extends ComponentProps {
  /**
   * className
   * @default
   */
  className?: string;
  /**
   * disabled
   * @default
   */
  disabled?: boolean;
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
  /**
   * changePage
   */
  changePage: (pageNumber: number) => void;
}

const LEFT_BUTTONS = 2;
const RIGHT_BUTTONS = 2;
const MAX_BUTTONS = LEFT_BUTTONS + RIGHT_BUTTONS + 1;

export class Pagination extends PureComponent<PaginationProps, {}> {
  public render() {
    const {
      className,
      disabled,
      itemCount,
      pageSize,
      currentPage,
      changePage,
      ...remainingProps
    } = this.props;

    return (
      <div {...remainingProps} className={classNames('pagination', className)}>
        <p className="display-inline">
          Showing {this.showingLowerCount()}-{this.showingUpperCounter()} of{' '}
          {itemCount}
        </p>

        <SpacedGroup className="float-right" large>
          <Button
            onClick={this.decrementPage}
            disabled={currentPage === 1 || disabled}
          >
            &#60;
          </Button>

          {this.paginationButtonCount().map((page: number, index: number) => {
            return (
              <Button
                key={index}
                className={this.getButtonType(page, index)}
                disabled={itemCount <= pageSize || disabled}
                onClick={this.onClickPageNumber(index, page)}
              >
                {this.getDisplayDots(index, page)
                  ? '...'
                  : this.getPageToGoTo(page, index)}
              </Button>
            );
          })}

          <Button
            disabled={
              !this.getMaxPages() ||
              currentPage === this.getMaxPages() ||
              disabled
            }
            onClick={this.incrementPage}
          >
            &#62;
          </Button>
        </SpacedGroup>
      </div>
    );
  }

  private decrementPage = () => {
    const { currentPage, changePage } = this.props;
    return changePage(currentPage - 1);
  };

  private incrementPage = () => {
    const { currentPage, changePage } = this.props;
    return changePage(currentPage + 1);
  };

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

  private getButtonType = (page: number, index: number) => {
    const { currentPage } = this.props;

    if (currentPage === page) {
      return 'primary';
    }
    if (this.getDisplayDots(index, page)) {
      return 'blank';
    }

    return undefined;
  };

  private getMorePages = () => this.getMaxPages() > MAX_BUTTONS;

  private getMaxPages = () => {
    const { itemCount, pageSize } = this.props;

    return Math.ceil(itemCount / pageSize);
  };

  private getDisplayDots = (index: number, page: number) =>
    this.getMorePages() &&
    ((index === 1 && page > 2) ||
      (index === MAX_BUTTONS - 2 && page < this.getMaxPages() - 1));

  private getPageToGoTo = (page: number, index: number) => {
    if (this.getMaxPages() > MAX_BUTTONS && index === 0 && page > 1) {
      return 1;
    } else if (
      this.getMaxPages() > MAX_BUTTONS &&
      index === MAX_BUTTONS - 1 &&
      page < this.getMaxPages()
    ) {
      return this.getMaxPages();
    }

    return page;
  };

  private onClickPageNumber = (index: number, page: number) => {
    const { currentPage, changePage } = this.props;

    if (currentPage !== page && !this.getDisplayDots(index, page)) {
      return () => changePage(this.getPageToGoTo(page, index));
    }
  };

  private getStart = () => {
    const { currentPage } = this.props;

    return Math.max(
      Math.min(
        currentPage - LEFT_BUTTONS,
        this.getMaxPages() - LEFT_BUTTONS - RIGHT_BUTTONS
      ),
      1
    );
  };

  private getEnd = () =>
    Math.min(this.getStart() + MAX_BUTTONS, this.getMaxPages() + 1);

  private getRangeStaps = () => {
    const { itemCount, pageSize } = this.props;

    if (itemCount % pageSize === 0 && itemCount / pageSize < 5) {
      return Math.floor(itemCount / pageSize);
    }
    if (itemCount % pageSize !== 0 && itemCount / pageSize < 5) {
      return Math.floor(itemCount / pageSize) + 1;
    }

    return MAX_BUTTONS;
  };

  private paginationSeries = (start: number, end: number, steps: number) => {
    return Array.apply(null, { length: steps }).map(
      (item: number, index: number) =>
        Math.floor(start + index * ((end - start) / steps))
    );
  };

  private paginationButtonCount = () =>
    this.paginationSeries(this.getStart(), this.getEnd(), this.getRangeStaps());
}

export default Pagination;
