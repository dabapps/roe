import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { getHref } from '../utils';

export type AnchorProps = HTMLProps<HTMLElement>;

/**
 * Link component that automatically creates an id and hash href that match, for linking to elements on a single page.
 */
export const Anchor: StatelessComponent<AnchorProps> = (props) => {
  const { children, href, ...remainingProps } = props;

  const automaticHref = getHref(children, href);

  return (
    <a {...remainingProps} id={automaticHref} href={automaticHref ? '#' + automaticHref : undefined}>
      {children}
    </a>
  );
}

export default Anchor;
