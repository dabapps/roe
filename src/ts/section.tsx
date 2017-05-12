import * as classNames from 'classnames';
import * as React from 'react';

export const Section: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const { children, className, ...remainingProps } = props;

  return (
    <section {...remainingProps} className={classNames(['section', className])}>
      {children}
    </section>
  );
};
