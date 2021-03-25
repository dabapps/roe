import { MAX_BUTTONS, LEFT_BUTTONS, RIGHT_BUTTONS } from './constants';

export const getIsDots = (
  totalPages: number,
  index: number,
  page: number
): boolean => {
  const hasMorePagesThanButtons = totalPages > MAX_BUTTONS;

  return (
    hasMorePagesThanButtons &&
    ((index === 1 && page > 2) ||
      (index === MAX_BUTTONS - 2 && page < totalPages - 1))
  );
};

export const getButtonType = (
  totalPages: number,
  page: number,
  index: number,
  currentPage: number
): string | undefined => {
  if (currentPage === page) {
    return 'selected';
  }
  if (getIsDots(totalPages, index, page)) {
    return 'dots';
  }

  return undefined;
};

export const getPageToGoTo = (
  totalPages: number,
  page: number,
  index: number
): number => {
  if (totalPages > MAX_BUTTONS && index === 0 && page > 1) {
    return 1;
  } else if (
    totalPages > MAX_BUTTONS &&
    index === MAX_BUTTONS - 1 &&
    page < totalPages
  ) {
    return totalPages;
  }

  return page;
};

const getStart = (totalPages: number, currentPage: number) => {
  return Math.max(
    Math.min(
      currentPage - LEFT_BUTTONS,
      totalPages - LEFT_BUTTONS - RIGHT_BUTTONS
    ),
    1
  );
};

const getEnd = (totalPages: number, start: number) =>
  Math.min(start + MAX_BUTTONS, totalPages + 1);

const getRange = (itemCount: number, pageSize: number, pageCount: number) => {
  const remainder = itemCount % pageSize;

  if (remainder === 0 && pageCount < MAX_BUTTONS) {
    return Math.floor(pageCount);
  }
  if (remainder !== 0 && pageCount < MAX_BUTTONS) {
    return Math.floor(pageCount) + 1;
  }

  return MAX_BUTTONS;
};

export const paginationSeries = (
  totalPages: number,
  pageCount: number,
  itemCount: number,
  pageSize: number,
  currentPage: number
): readonly number[] => {
  const start = getStart(totalPages, currentPage);
  const end = getEnd(totalPages, start);
  const range = getRange(itemCount, pageSize, pageCount);

  return [...Array(range)].map((_item, index) =>
    Math.floor(start + index * ((end - start) / range))
  );
};
