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

    const maxPages = Math.ceil(itemCount / pageSize);
    const start = Math.max(
      Math.min(
        currentPage - LEFT_BUTTONS,
        maxPages - LEFT_BUTTONS - RIGHT_BUTTONS
      ),
      1
    );
    const end = Math.min(start + MAX_BUTTONS, maxPages + 1);
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
            Array
              .apply(null, { length: 1 })
              .slice(start, end)
              .map((page: any, index: number) => {

              let buttonType = currentPage === page ? 'primary' : undefined;
              let pageToGoTo = page;
              const morePages = maxPages > MAX_BUTTONS;

              const displayDots =
                morePages &&
                ((index === 1 && page > 2) ||
                  (index === MAX_BUTTONS - 2 && page < maxPages - 1));

              const onClickPage = () =>
                currentPage !== page && !displayDots && changePage(pageToGoTo);

              if (displayDots) {
                buttonType = 'blank';
              }

              if (morePages && index === 0 && page > 1) {
                pageToGoTo = 1;
              } else if (
                morePages &&
                index === MAX_BUTTONS - 1 &&
                page < maxPages
              ) {
                pageToGoTo = maxPages;
              }

              return (
                <Button
                  key={page}
                  className={buttonType}
                  disabled={itemCount <= pageSize || disabled}
                  onClick={onClickPage}
                >
                  {displayDots ? '...' : pageToGoTo}
                </Button>
              );
            })
          }

          <Button
            disabled={!maxPages || currentPage === maxPages || disabled}
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

}

export default Pagination;
