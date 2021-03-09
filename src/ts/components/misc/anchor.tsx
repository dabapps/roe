import * as React from 'react';

import { getHref, memoWithComponentProp } from '../../utils';

export type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

/**
 * Link component that automatically creates an id and hash href that match, for linking to elements on a single page.
 */
const Anchor = (props: AnchorProps) => {
  const { children, href, ...remainingProps } = props;

  const automaticHref = getHref(children, href);

  return (
    <a
      {...remainingProps}
      id={automaticHref}
      href={automaticHref ? '#' + automaticHref : undefined}
    >
      {children}
    </a>
  );
};

export default memoWithComponentProp(Anchor);
