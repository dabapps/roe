import * as classNames from 'classnames';
import { PureComponent } from 'react';
import * as React from 'react';

import { ComponentProps } from '../../types';
import Button from '../forms/button';
import SpacedGroup from '../misc/spaced-group';

export interface PaginationProps extends ComponentProps {
  /**
   * className
   */
  className?: string;
  /**
   * is disabled
   * @default false
   */
  disabled?: boolean;
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
  /**
   * next button text
   * @default '>'
   */
  nextText?: string;
  /**
   * prev button text
   * @default '<'
   */
  prevText?: string;
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
      currentPageNumber,
      changePage,
      nextText,
      prevText,
      ...remainingProps
    } = this.props;

    return (
      <div {...remainingProps} className={classNames('pagination', className)}>
        <SpacedGroup className="pagination-group" large>
          <Button
            className={classNames('prev', {
              disabled: this.isPrevButtonDisabled(),
            })}
            onClick={this.decrementPage}
            disabled={this.isPrevButtonDisabled()}
          >
            {prevText ? <span className="prev-icon">{prevText}</span> : '<'}
          </Button>

          {this.paginationSeries(
            this.getStart(),
            this.getEnd(),
            this.getRange()
          ).map((page: number, index: number) => {
            return this.getDisplayDots(index, page) ? (
              <div
                key={index}
                className={classNames(this.getButtonType(page, index))}
              >
                ...
              </div>
            ) : (
              <Button
                key={index}
                className={classNames(this.getButtonType(page, index), {
                  disabled: this.isPageButtonDisabled(),
                })}
                disabled={this.isPageButtonDisabled()}
                onClick={this.onClickPageNumber(index, page)}
              >
                {this.getPageToGoTo(page, index)}
              </Button>
            );
          })}

          <Button
            className={classNames('next', {
              disabled: this.isNextButtonDisabled(),
            })}
            disabled={this.isNextButtonDisabled()}
            onClick={this.incrementPage}
          >
            {nextText ? <span className="next-icon">{nextText}</span> : '>'}
          </Button>
        </SpacedGroup>
      </div>
    );
  }

  private decrementPage = () => {
    const { currentPageNumber, changePage } = this.props;
    return changePage(currentPageNumber - 1);
  };

  private incrementPage = () => {
    const { currentPageNumber, changePage } = this.props;
    return changePage(currentPageNumber + 1);
  };

  private isNextButtonDisabled = () => {
    const { currentPageNumber, disabled } = this.props;
    return (
      !this.getMaxPages() ||
      currentPageNumber === this.getMaxPages() ||
      disabled
    );
  };

  private isPrevButtonDisabled = () => {
    const { currentPageNumber, disabled } = this.props;
    return currentPageNumber === 1 || disabled;
  };

  private isPageButtonDisabled = () => {
    const { itemCount, pageSize, disabled } = this.props;
    return itemCount <= pageSize || disabled;
  };

  private getButtonType = (page: number, index: number) => {
    const { currentPageNumber } = this.props;

    if (currentPageNumber === page) {
      return 'selected';
    }
    if (this.getDisplayDots(index, page)) {
      return 'dots';
    }

    return undefined;
  };

  private shouldGetMorePages = () => this.getMaxPages() > MAX_BUTTONS;

  private numFullPages = () => {
    const { itemCount, pageSize } = this.props;
    return itemCount / pageSize;
  };

  private getMaxPages = () => Math.ceil(this.numFullPages());

  private getDisplayDots = (index: number, page: number) =>
    this.shouldGetMorePages() &&
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
    const { currentPageNumber, changePage } = this.props;

    if (currentPageNumber !== page && !this.getDisplayDots(index, page)) {
      return () => changePage(this.getPageToGoTo(page, index));
    }
  };

  private getStart = () => {
    const { currentPageNumber } = this.props;

    return Math.max(
      Math.min(
        currentPageNumber - LEFT_BUTTONS,
        this.getMaxPages() - LEFT_BUTTONS - RIGHT_BUTTONS
      ),
      1
    );
  };

  private getEnd = () =>
    Math.min(this.getStart() + MAX_BUTTONS, this.getMaxPages() + 1);

  private getRange = () => {
    const { itemCount, pageSize } = this.props;

    const remainder = itemCount % pageSize;

    if (remainder === 0 && this.numFullPages() < MAX_BUTTONS) {
      return Math.floor(this.numFullPages());
    }
    if (remainder !== 0 && this.numFullPages() < MAX_BUTTONS) {
      return Math.floor(this.numFullPages()) + 1;
    }

    return MAX_BUTTONS;
  };

  private paginationSeries = (start: number, end: number, range: number) => {
    return Array.apply(null, {
      length: range,
    }).map((item: number, index: number) =>
      Math.floor(start + index * ((end - start) / range))
    );
  };
}

export default Pagination;
