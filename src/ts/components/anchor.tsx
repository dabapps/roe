import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { getHref } from '../utils';

export type AnchorProps = HTMLProps<HTMLElement>;

export const Anchor: StatelessComponent<AnchorProps> = (props) => {
  const { children, href, ...remainingProps } = props;

  const automaticHref = getHref(children, href);

  return (
    <a {...remainingProps} id={automaticHref} href={automaticHref ? '#' + automaticHref : undefined}>
      {children}
    </a>
  );
}
