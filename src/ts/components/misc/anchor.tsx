import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { getHref } from '../utils';

export type AnchorProps = HTMLProps<HTMLElement>;

/**
 * Link component that automatically creates an id and hash href that match, for linking to elements on a single page.
 */
export class Anchor extends PureComponent<AnchorProps, {}> {
  public render() {
    const { children, href, ...remainingProps } = this.props;

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
  }
}

export default Anchor;
