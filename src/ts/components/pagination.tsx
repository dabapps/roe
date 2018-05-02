import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../types'
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

  public render () {

   const {
    className,
    disabled,
    itemCount,
    pageSize,
    currentPage,
    changePage,
    ...remainingProps,
  } = this.props;

    const showingLowerCount = ((currentPage - 1) * pageSize) || 1;
    const showingUpperCounter = pageSize * currentPage > itemCount ? itemCount : pageSize * currentPage;

    return (
      <div
        {...remainingProps}
        className={classNames('pagination', className)}
      >
        <p className="display-inline">
          Showing {showingLowerCount}-{showingUpperCounter} of {itemCount}
        </p>

        <SpacedGroup className='float-right' large>

          <Button
            onClick={this.decrementPage}
            disabled={currentPage === 1 || disabled}
          >
            &#60;
          </Button>
          {
            console.log(this.arithmeticSeries(this.getStart(), this.getEnd(), this.getRangeStaps()))
          }
          {
            this.arithmeticSeries(this.getStart(), this.getEnd(), this.getRangeStaps())
              .map((page: number, index: number) => {

              const displayDots =
                this.getMorePages() &&
                ((index === 1 && page > 2) ||
                  (index === MAX_BUTTONS - 2 && page < this.getMaxPages() - 1));

              const onClickPage = () =>
                currentPage !== page && !displayDots && changePage(this.getPageToGoTo(page, index));

              return (
                <Button
                  key={index}
                  className={this.getButtonType(page, displayDots)}
                  disabled={itemCount <= pageSize || disabled}
                  onClick={onClickPage}
                >
                  {displayDots ? '...' : this.getPageToGoTo(page, index)}
                </Button>
              );
            })
          }

          <Button
            disabled={!this.getMaxPages() || currentPage === this.getMaxPages() || disabled}
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
  }

  private incrementPage = () => {
    const { currentPage, changePage } = this.props;
    return changePage(currentPage + 1);
  }

  private getButtonType = (page: number, displayDots: boolean) => {
    const { currentPage } = this.props;

    if (currentPage === page) {
      return 'primary';
    }

    if (displayDots) {
      return 'blank';
    }

    return undefined;
  }

  private getDisplayDots = () => {
    const { currentPage } = this.props;
  }

  private getStart = () => {
    const { currentPage } = this.props;
    return Math.max(
      Math.min(
        currentPage - LEFT_BUTTONS,
        this.getMaxPages() - LEFT_BUTTONS - RIGHT_BUTTONS
      ),
      1
    );
  }

  private getEnd = () => {
    const { currentPage } = this.props;
    return Math.min(this.getStart() + MAX_BUTTONS, this.getMaxPages() + 1);
  }

  private getMorePages = () => this.getMaxPages() > MAX_BUTTONS;

  private getMaxPages = () => {
    const { itemCount, pageSize} = this.props;
    return Math.ceil(itemCount / pageSize);
  }

  private getPageToGoTo = (page: number, index: number) => {
    const { itemCount, pageSize } = this.props;

    if ((this.getMaxPages() > MAX_BUTTONS) && index === 0 && page > 1) {
      return 1;
    } else if (
      (this.getMaxPages() > MAX_BUTTONS) &&
      index === MAX_BUTTONS - 1 &&
      page < this.getMaxPages()
    ) {
      return this.getMaxPages();
    }

    return page;
  }

  private getRangeStaps = () => {
    const { itemCount, pageSize } = this.props;

    if ((itemCount % pageSize) === 0 && (itemCount / pageSize) < 5) {
      console.log('YAY');

      return Math.floor(itemCount / pageSize);
    }

    if ((itemCount % pageSize) !== 0 && (itemCount / pageSize) < 5) {
      console.log('--------');

      return Math.floor(itemCount / pageSize) + 1;
    }
    console.log('HAAAAA');
    return 5;
  }

  private arithmeticSeries = (start: number, end: number, steps: number) => {
    return Array.apply(null, { length: steps }).map((item: number, index: number) =>
      Math.floor(start + (index) * ((end - start) / steps))
    );
  }

}

export default Pagination;
