import * as classNames from 'classnames';
import * as React from 'react';

import Button from '../forms/button';
import SpacedGroup from '../misc/spaced-group';
import {
  paginationSeries,
  getIsDots,
  getPageToGoTo,
  getButtonType,
} from './utils';

export type PaginationProps = {
  /**
   * Disable the pagination
   * @default false
   */
  disabled?: boolean;
  /**
   * Number of items per page
   */
  pageSize: number;
  /**
   * Current page number to highlight (1 indexed)
   */
  currentPageNumber: number;
  /**
   * Total number of items available
   */
  itemCount: number;
  /**
   * Next button text
   * @default '>'
   */
  nextText?: string;
  /**
   * Previous button text
   * @default '<'
   */
  prevText?: string;
  /**
   * Called when a page is selected
   */
  changePage: (pageNumber: number) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const Pagination = (props: PaginationProps) => {
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
  } = props;

  const pageCount = itemCount / pageSize;
  const totalPages = Math.ceil(pageCount);
  const isPrevButtonDisabled = currentPageNumber === 1 || disabled;
  const isNextButtonDisabled =
    !totalPages || currentPageNumber === totalPages || disabled;
  const isPageButtonDisabled = itemCount <= pageSize || disabled;

  const decrementPage = React.useCallback(() => {
    return changePage(currentPageNumber - 1);
  }, [currentPageNumber, changePage]);

  const incrementPage = React.useCallback(() => {
    return changePage(currentPageNumber + 1);
  }, [currentPageNumber, changePage]);

  const onClickPageNumber = React.useCallback(
    (index: number, page: number) => {
      if (currentPageNumber !== page && !getIsDots(totalPages, index, page)) {
        return () => changePage(getPageToGoTo(totalPages, page, index));
      }
    },
    [currentPageNumber, changePage, totalPages]
  );

  return (
    <div {...remainingProps} className={classNames('pagination', className)}>
      <SpacedGroup className="pagination-group" large>
        <Button
          className={classNames('prev', {
            disabled: isPrevButtonDisabled,
          })}
          onClick={decrementPage}
          disabled={isPrevButtonDisabled}
        >
          {prevText ? <span className="prev-icon">{prevText}</span> : '<'}
        </Button>

        {paginationSeries(
          totalPages,
          pageCount,
          itemCount,
          pageSize,
          currentPageNumber
        ).map((page: number, index: number) => {
          const buttonType = getButtonType(
            totalPages,
            page,
            index,
            currentPageNumber
          );

          return getIsDots(totalPages, index, page) ? (
            <div key={index} className={buttonType}>
              ...
            </div>
          ) : (
            <Button
              key={index}
              className={classNames(buttonType, {
                disabled: isPageButtonDisabled,
              })}
              disabled={isPageButtonDisabled}
              onClick={onClickPageNumber(index, page)}
            >
              {getPageToGoTo(totalPages, page, index)}
            </Button>
          );
        })}

        <Button
          className={classNames('next', {
            disabled: isNextButtonDisabled,
          })}
          disabled={isNextButtonDisabled}
          onClick={incrementPage}
        >
          {nextText ? <span className="next-icon">{nextText}</span> : '>'}
        </Button>
      </SpacedGroup>
    </div>
  );
};

export default React.memo(Pagination);
