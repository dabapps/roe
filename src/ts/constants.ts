export const NBSP = '\u00a0';

export const MATCHES_WHITESPACE = /\s+/g;
export const MATCHES_INITIAL_INDENTATION = /^([^\S\n]*)\S/;
export const MATCHES_BLANK_FIRST_LINE = /^\s*\n/;
export const MATCHES_BLANK_LAST_LINE = /\n\s*$/;

export const MATCHES_AMPERSAND = /&/g;
export const MATCHES_NON_WORD_CHARACTERS = /[\W_]+/gi;
export const MATCHES_LEADING_AND_TRAILING_HYPHENS = /(^-+|-+$)/g;
