import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

export interface SectionProps extends HTMLProps<HTMLDivElement> {
  component?: string;
}

export class Section extends PureComponent<SectionProps, void> {
  public render () {
    const { children, className, component: Component = 'section', ...remainingProps } = this.props;

    return (
      <Component {...remainingProps} className={classNames(['section', className])}>
        {children}
      </Component>
    );
  }
}
