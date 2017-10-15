import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';

export interface ColumnProps extends HTMLProps<HTMLElement> {
  component?: string;
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

export function isValidNumber (value?: number) {
  return typeof value === 'number' && value === +value;
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
    isValidNumber(xs) ? `xs-${xs}` : null,
    isValidNumber(sm) ? `sm-${sm}` : null,
    isValidNumber(md) ? `md-${md}` : null,
    isValidNumber(lg) ? `lg-${lg}` : null,
    isValidNumber(xl) ? `xl-${xl}` : null,
    isValidNumber(xsOffset) ? `xs-offset-${xsOffset}` : null,
    isValidNumber(smOffset) ? `sm-offset-${smOffset}` : null,
    isValidNumber(mdOffset) ? `md-offset-${mdOffset}` : null,
    isValidNumber(lgOffset) ? `lg-offset-${lgOffset}` : null,
    isValidNumber(xlOffset) ? `xl-offset-${xlOffset}` : null,
    isValidNumber(xsFill) ? `xs-fill-${xsFill}` : null,
    isValidNumber(smFill) ? `sm-fill-${smFill}` : null,
    isValidNumber(mdFill) ? `md-fill-${mdFill}` : null,
    isValidNumber(lgFill) ? `lg-fill-${lgFill}` : null,
    isValidNumber(xlFill) ? `xl-fill-${xlFill}` : null,
    isValidNumber(xsPush) ? `xs-push-${xsPush}` : null,
    isValidNumber(smPush) ? `sm-push-${smPush}` : null,
    isValidNumber(mdPush) ? `md-push-${mdPush}` : null,
    isValidNumber(lgPush) ? `lg-push-${lgPush}` : null,
    isValidNumber(xlPush) ? `xl-push-${xlPush}` : null,
    isValidNumber(xsPull) ? `xs-pull-${xsPull}` : null,
    isValidNumber(smPull) ? `sm-pull-${smPull}` : null,
    isValidNumber(mdPull) ? `md-pull-${mdPull}` : null,
    isValidNumber(lgPull) ? `lg-pull-${lgPull}` : null,
    isValidNumber(xlPull) ? `xl-pull-${xlPull}` : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}

export default Column;
