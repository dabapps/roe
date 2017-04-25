const MATCHES_WHITESPACES = /\s+/g;
const MATCHES_LEADING_AND_TRAILING_WHITESPACE = /(?:^\s+|\s+$)/g;
const SPACE = ' ';
const EMPTY_STRING = '';

export const joinClassNames = (classNames: any[]): string => classNames
  .map((className) => typeof className === 'string' ? SPACE + className : EMPTY_STRING)
  .join(SPACE)
  .replace(MATCHES_WHITESPACES, SPACE)
  .replace(MATCHES_LEADING_AND_TRAILING_WHITESPACE, EMPTY_STRING);
