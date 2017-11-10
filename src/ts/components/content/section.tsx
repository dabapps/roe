import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export type SectionProps = ComponentProps & HTMLProps<HTMLElement>;

export const Section: StatelessComponent<SectionProps> = (props) => {
  const { children, className, component: Component = 'section', ...remainingProps } = props;

  return (
    <Component {...remainingProps} className={classNames(['section', className])}>
      {children}
    </Component>
  );
}

export default Section;
