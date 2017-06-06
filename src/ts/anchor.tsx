import * as React from 'react';

const MATCHES_AMPERSAND = /&/gi;
const MATCHES_NON_WORD_CHARACTERS = /[\W_]+/gi;
const MATCHES_LEADING_AND_TRAILING_HYPHENS = /(^-+|-+$)/gi;

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

export const Anchor: React.SFC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
  const { children, href, ...remainingProps } = props;

  const automaticHref = getHref(children, href);

  return (
    <a {...remainingProps} id={automaticHref} href={automaticHref ? '#' + automaticHref : undefined}>
      {children}
    </a>
  );
};
