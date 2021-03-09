import * as React from 'react';
import * as randomSeed from 'random-seed';

import {
  FunctionComponentOptionalComponentProp,
  IntrinsicElementType,
} from './types';
import {
  MATCHES_AMPERSAND,
  MATCHES_BLANK_FIRST_LINE,
  MATCHES_BLANK_LAST_LINE,
  MATCHES_INITIAL_INDENTATION,
  MATCHES_LEADING_AND_TRAILING_HYPHENS,
  MATCHES_NON_WORD_CHARACTERS,
} from './constants';

export const formatCode = (code: string): string => {
  const codeWithoutLeadingOrTrailingEmptyLines = code
    .replace(MATCHES_BLANK_FIRST_LINE, '')
    .replace(MATCHES_BLANK_LAST_LINE, '');

  const initialIndentation: RegExpExecArray | null = MATCHES_INITIAL_INDENTATION.exec(
    codeWithoutLeadingOrTrailingEmptyLines
  );

  return initialIndentation
    ? codeWithoutLeadingOrTrailingEmptyLines.replace(
        new RegExp(`^${initialIndentation[1]}`, 'gm'),
        ''
      )
    : codeWithoutLeadingOrTrailingEmptyLines;
};

export const getHref = (
  children?: React.ReactNode,
  href?: string
): string | undefined => {
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
};

let rand = randomSeed.create('dabapps');

export const resetRandomSeed = (): void => {
  rand = randomSeed.create('dabapps');
};

export const generateIpsum = (words: ReadonlyArray<string>): string => {
  const ipsum = [...Array(15)]
    .map(() => words[Math.floor(rand.range(words.length))])
    .join(' ');

  return ipsum.charAt(0).toUpperCase() + ipsum.substring(1) + '.';
};

export const shouldNotBeRendered = (children: unknown): boolean => {
  return (
    children === false ||
    children === null ||
    children === undefined ||
    children === ''
  );
};

export const isValidColumnNumber = (value?: number): boolean =>
  typeof value === 'number' && value === +value;

export const getScrollOffset = (): { x: number; y: number } => {
  const doc = document.documentElement;
  const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  return {
    x: left,
    y: top,
  };
};

export const memoWithComponentProp = <
  T extends FunctionComponentOptionalComponentProp<C, E>,
  C extends IntrinsicElementType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E extends Record<string, any> = Record<string, unknown>
>(
  component: T
): T & {
  displayName?: string;
  readonly $$typeof: symbol;
  readonly type: T;
} => {
  // Ignore React's types because they get too "complex"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.memo(component as any) as any;
};
