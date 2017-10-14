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
    typeof xs === 'number' ? `xs-${xs}` : null,
    typeof sm === 'number' ? `sm-${sm}` : null,
    typeof md === 'number' ? `md-${md}` : null,
    typeof lg === 'number' ? `lg-${lg}` : null,
    typeof xl === 'number' ? `xl-${xl}` : null,
    typeof xsOffset === 'number' ? `xs-offset-${xsOffset}` : null,
    typeof smOffset === 'number' ? `sm-offset-${smOffset}` : null,
    typeof mdOffset === 'number' ? `md-offset-${mdOffset}` : null,
    typeof lgOffset === 'number' ? `lg-offset-${lgOffset}` : null,
    typeof xlOffset === 'number' ? `xl-offset-${xlOffset}` : null,
    typeof xsFill === 'number' ? `xs-fill-${xsFill}` : null,
    typeof smFill === 'number' ? `sm-fill-${smFill}` : null,
    typeof mdFill === 'number' ? `md-fill-${mdFill}` : null,
    typeof lgFill === 'number' ? `lg-fill-${lgFill}` : null,
    typeof xlFill === 'number' ? `xl-fill-${xlFill}` : null,
    typeof xsPush === 'number' ? `xs-push-${xsPush}` : null,
    typeof smPush === 'number' ? `sm-push-${smPush}` : null,
    typeof mdPush === 'number' ? `md-push-${mdPush}` : null,
    typeof lgPush === 'number' ? `lg-push-${lgPush}` : null,
    typeof xlPush === 'number' ? `xl-push-${xlPush}` : null,
    typeof xsPull === 'number' ? `xs-pull-${xsPull}` : null,
    typeof smPull === 'number' ? `sm-pull-${smPull}` : null,
    typeof mdPull === 'number' ? `md-pull-${mdPull}` : null,
    typeof lgPull === 'number' ? `lg-pull-${lgPull}` : null,
    typeof xlPull === 'number' ? `xl-pull-${xlPull}` : null,
    className
  ];

  return (
    <Component {...remainingProps} className={classNames(myClassNames)}>
      {children}
    </Component>
  );
}

export default Column;
