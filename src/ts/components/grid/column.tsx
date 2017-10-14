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
    xs && `xs-${xs}`,
    sm && `sm-${sm}`,
    md && `md-${md}`,
    lg && `lg-${lg}`,
    xl && `xl-${xl}`,
    xsOffset && `xs-offset-${xsOffset}`,
    smOffset && `sm-offset-${smOffset}`,
    mdOffset && `md-offset-${mdOffset}`,
    lgOffset && `lg-offset-${lgOffset}`,
    xlOffset && `xl-offset-${xlOffset}`,
    xsFill && `xs-fill-${xsFill}`,
    smFill && `sm-fill-${smFill}`,
    mdFill && `md-fill-${mdFill}`,
    lgFill && `lg-fill-${lgFill}`,
    xlFill && `xl-fill-${xlFill}`,
    xsPush && `xs-push-${xsPush}`,
    smPush && `sm-push-${smPush}`,
    mdPush && `md-push-${mdPush}`,
    lgPush && `lg-push-${lgPush}`,
    xlPush && `xl-push-${xlPush}`,
    xsPull && `xs-pull-${xsPull}`,
    smPull && `sm-pull-${smPull}`,
    mdPull && `md-pull-${mdPull}`,
    lgPull && `lg-pull-${lgPull}`,
    xlPull && `xl-pull-${xlPull}`,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}

export default Column;