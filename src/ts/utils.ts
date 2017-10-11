import * as randomSeed from 'random-seed';
import {
  MATCHES_AMPERSAND,
  MATCHES_BLANK_FIRST_LINE,
  MATCHES_BLANK_LAST_LINE,
  MATCHES_INITIAL_INDENTATION,
  MATCHES_LEADING_AND_TRAILING_HYPHENS,
  MATCHES_NON_WORD_CHARACTERS,
} from './constants';

export function formatCode (code: string) {
  const codeWithoutLeadingOrTrailingEmptyLines = code
    .replace(MATCHES_BLANK_FIRST_LINE, '')
    .replace(MATCHES_BLANK_LAST_LINE, '');

  const initialIndentation: RegExpExecArray | null =
    MATCHES_INITIAL_INDENTATION.exec(codeWithoutLeadingOrTrailingEmptyLines);

  return initialIndentation ?
    codeWithoutLeadingOrTrailingEmptyLines.replace(new RegExp(`^${initialIndentation[1]}`, 'gm'), '') :
    codeWithoutLeadingOrTrailingEmptyLines;
}

export const getHref = (children?: React.ReactNode, href?: string): string | undefined => {
  if (href) {
    return href;
  }

  if (typeof children !== 'string') {
    return undefined;
  }

  return children
    .replace(MATCHES_AMPERSAND, '-and-')
    .replace(MATCHES_NON_WORD_CHARACTERS, '-')
    .replace(MATCHES_LEADING_AND_TRAILING_HYPHENS, '')
    .toLowerCase();
}

let rand = randomSeed.create('dabapps');

export const resetRandomSeed = () => {
  rand = randomSeed.create('dabapps');
}

export const generateIpsum = (words: string[]) => {
  const ipsum = Array.apply(null, new Array(15)).map(() => (
    words[Math.floor(rand.range(words.length))]
  )).join(' ');

  return ipsum.charAt(0).toUpperCase() + ipsum.substring(1) + '.';
}

export const shouldNotBeRendered = (children: any) => {
  return children === false || children === null || children === undefined || children === '';
};
