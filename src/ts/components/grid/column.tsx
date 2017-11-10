import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';
import { isValidColumnNumber } from '../../utils';

export interface ColumnProps extends ComponentProps, HTMLProps<HTMLElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlOffset?: number;
  xsFill?: number;
  smFill?: number;
  mdFill?: number;
  lgFill?: number;
  xlFill?: number;
  xsPush?: number;
  smPush?: number;
  mdPush?: number;
  lgPush?: number;
  xlPush?: number;
  xsPull?: number;
  smPull?: number;
  mdPull?: number;
  lgPull?: number;
  xlPull?: number;
}

export const Column: StatelessComponent<ColumnProps> = (props) => {
  const {
    children,
    className,
    component: Component = 'div',
    xs,
    sm,
    md,
    lg,
    xl,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    xsFill,
    smFill,
    mdFill,
    lgFill,
    xlFill,
    xsPush,
    smPush,
    mdPush,
    lgPush,
    xlPush,
    xsPull,
    smPull,
    mdPull,
    lgPull,
    xlPull,
    ...remainingProps
  } = props;

  const myClassNames = [
    'column',
    isValidColumnNumber(xs) ? `xs-${xs}` : null,
    isValidColumnNumber(sm) ? `sm-${sm}` : null,
    isValidColumnNumber(md) ? `md-${md}` : null,
    isValidColumnNumber(lg) ? `lg-${lg}` : null,
    isValidColumnNumber(xl) ? `xl-${xl}` : null,
    isValidColumnNumber(xsOffset) ? `xs-offset-${xsOffset}` : null,
    isValidColumnNumber(smOffset) ? `sm-offset-${smOffset}` : null,
    isValidColumnNumber(mdOffset) ? `md-offset-${mdOffset}` : null,
    isValidColumnNumber(lgOffset) ? `lg-offset-${lgOffset}` : null,
    isValidColumnNumber(xlOffset) ? `xl-offset-${xlOffset}` : null,
    isValidColumnNumber(xsFill) ? `xs-fill-${xsFill}` : null,
    isValidColumnNumber(smFill) ? `sm-fill-${smFill}` : null,
    isValidColumnNumber(mdFill) ? `md-fill-${mdFill}` : null,
    isValidColumnNumber(lgFill) ? `lg-fill-${lgFill}` : null,
    isValidColumnNumber(xlFill) ? `xl-fill-${xlFill}` : null,
    isValidColumnNumber(xsPush) ? `xs-push-${xsPush}` : null,
    isValidColumnNumber(smPush) ? `sm-push-${smPush}` : null,
    isValidColumnNumber(mdPush) ? `md-push-${mdPush}` : null,
    isValidColumnNumber(lgPush) ? `lg-push-${lgPush}` : null,
    isValidColumnNumber(xlPush) ? `xl-push-${xlPush}` : null,
    isValidColumnNumber(xsPull) ? `xs-pull-${xsPull}` : null,
    isValidColumnNumber(smPull) ? `sm-pull-${smPull}` : null,
    isValidColumnNumber(mdPull) ? `md-pull-${mdPull}` : null,
    isValidColumnNumber(lgPull) ? `lg-pull-${lgPull}` : null,
    isValidColumnNumber(xlPull) ? `xl-pull-${xlPull}` : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}

export default Column;
