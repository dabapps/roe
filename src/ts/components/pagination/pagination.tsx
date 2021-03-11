import * as classNames from 'classnames';
import * as React from 'react';

import Button from '../forms/button';
import SpacedGroup from '../misc/spaced-group';

export type PaginationProps = {
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
};

const LEFT_BUTTONS = 2;
const RIGHT_BUTTONS = 2;
const MAX_BUTTONS = LEFT_BUTTONS + RIGHT_BUTTONS + 1;

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

  const decrementPage = React.useCallback(() => {
    return changePage(currentPageNumber - 1);
  }, [currentPageNumber, changePage]);

  const incrementPage = React.useCallback(() => {
    return changePage(currentPageNumber + 1);
  }, [currentPageNumber, changePage]);

  const numFullPages = React.useCallback(() => {
    return itemCount / pageSize;
  }, [itemCount, pageSize]);

  const getMaxPages = React.useCallback(() => Math.ceil(numFullPages()), [
    numFullPages,
  ]);

  const isNextButtonDisabled = React.useCallback(() => {
    return !getMaxPages() || currentPageNumber === getMaxPages() || disabled;
  }, [getMaxPages, currentPageNumber, disabled]);

  const isPrevButtonDisabled = React.useCallback(() => {
    return currentPageNumber === 1 || disabled;
  }, [currentPageNumber, disabled]);

  const isPageButtonDisabled = React.useCallback(() => {
    return itemCount <= pageSize || disabled;
  }, [itemCount, pageSize, disabled]);

  const shouldGetMorePages = React.useCallback(
    () => getMaxPages() > MAX_BUTTONS,
    [getMaxPages]
  );

  const getDisplayDots = React.useCallback(
    (index: number, page: number) =>
      shouldGetMorePages() &&
      ((index === 1 && page > 2) ||
        (index === MAX_BUTTONS - 2 && page < getMaxPages() - 1)),
    [shouldGetMorePages, getMaxPages]
  );

  const getButtonType = React.useCallback(
    (page: number, index: number) => {
      if (currentPageNumber === page) {
        return 'selected';
      }
      if (getDisplayDots(index, page)) {
        return 'dots';
      }

      return undefined;
    },
    [currentPageNumber, getDisplayDots]
  );

  const getPageToGoTo = React.useCallback(
    (page: number, index: number) => {
      if (getMaxPages() > MAX_BUTTONS && index === 0 && page > 1) {
        return 1;
      } else if (
        getMaxPages() > MAX_BUTTONS &&
        index === MAX_BUTTONS - 1 &&
        page < getMaxPages()
      ) {
        return getMaxPages();
      }

      return page;
    },
    [getMaxPages]
  );

  const onClickPageNumber = React.useCallback(
    (index: number, page: number) => {
      if (currentPageNumber !== page && !getDisplayDots(index, page)) {
        return () => changePage(getPageToGoTo(page, index));
      }
    },
    [currentPageNumber, changePage, getPageToGoTo, getDisplayDots]
  );

  const getStart = React.useCallback(() => {
    return Math.max(
      Math.min(
        currentPageNumber - LEFT_BUTTONS,
        getMaxPages() - LEFT_BUTTONS - RIGHT_BUTTONS
      ),
      1
    );
  }, [currentPageNumber, getMaxPages]);

  const getEnd = React.useCallback(
    () => Math.min(getStart() + MAX_BUTTONS, getMaxPages() + 1),
    [getStart, getMaxPages]
  );

  const getRange = React.useCallback(() => {
    const remainder = itemCount % pageSize;

    if (remainder === 0 && numFullPages() < MAX_BUTTONS) {
      return Math.floor(numFullPages());
    }
    if (remainder !== 0 && numFullPages() < MAX_BUTTONS) {
      return Math.floor(numFullPages()) + 1;
    }

    return MAX_BUTTONS;
  }, [numFullPages, pageSize, itemCount]);

  const paginationSeries = (start: number, end: number, range: number) => {
    // eslint-disable-next-line prefer-spread
    return Array.apply(null, {
      length: range,
    }).map((item: number, index: number) =>
      Math.floor(start + index * ((end - start) / range))
    );
  };

  return (
    <div {...remainingProps} className={classNames('pagination', className)}>
      <SpacedGroup className="pagination-group" large>
        <Button
          className={classNames('prev', {
            disabled: isPrevButtonDisabled(),
          })}
          onClick={decrementPage}
          disabled={isPrevButtonDisabled()}
        >
          {prevText ? <span className="prev-icon">{prevText}</span> : '<'}
        </Button>

        {paginationSeries(getStart(), getEnd(), getRange()).map(
          (page: number, index: number) => {
            return getDisplayDots(index, page) ? (
              <div
                key={index}
                className={classNames(getButtonType(page, index))}
              >
                ...
              </div>
            ) : (
              <Button
                key={index}
                className={classNames(getButtonType(page, index), {
                  disabled: isPageButtonDisabled(),
                })}
                disabled={isPageButtonDisabled()}
                onClick={onClickPageNumber(index, page)}
              >
                {getPageToGoTo(page, index)}
              </Button>
            );
          }
        )}

        <Button
          className={classNames('next', {
            disabled: isNextButtonDisabled(),
          })}
          disabled={isNextButtonDisabled()}
          onClick={incrementPage}
        >
          {nextText ? <span className="next-icon">{nextText}</span> : '>'}
        </Button>
      </SpacedGroup>
    </div>
  );
};

export default React.memo(Pagination);
