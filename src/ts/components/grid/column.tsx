import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';
import { isValidColumnNumber } from '../../utils';

export interface ColumnProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Columns to occupy on extra small screens
   */
  xs?: number;
  /**
   * Columns to occupy on small screens
   */
  sm?: number;
  /**
   * Columns to occupy on medium screens
   */
  md?: number;
  /**
   * Columns to occupy on large screens
   */
  lg?: number;
  /**
   * Columns to occupy on extra large screens
   */
  xl?: number;
  /**
   * Columns to be offset by, with `margin-left`, on extra small screens
   */
  xsOffset?: number;
  /**
   * Columns to be offset by, with `margin-left`, on small screens
   */
  smOffset?: number;
  /**
   * Columns to be offset by, with `margin-left`, on medium screens
   */
  mdOffset?: number;
  /**
   * Columns to be offset by, with `margin-left`, on large screens
   */
  lgOffset?: number;
  /**
   * Columns to be offset by, with `margin-left`, on extra large screens
   */
  xlOffset?: number;
  /**
   * Columns to fill with `margin-right` on extra small screens
   */
  xsFill?: number;
  /**
   * Columns to fill with `margin-right` on small screens
   */
  smFill?: number;
  /**
   * Columns to fill with `margin-right` on medium screens
   */
  mdFill?: number;
  /**
   * Columns to fill with `margin-right` on large screens
   */
  lgFill?: number;
  /**
   * Columns to fill with `margin-right` on extra large screens
   */
  xlFill?: number;
  /**
   * Columns to be push left by, with `left`, on extra small screens
   */
  xsPush?: number;
  /**
   * Columns to be push left by, with `left`, on small screens
   */
  smPush?: number;
  /**
   * Columns to be push left by, with `left`, on medium screens
   */
  mdPush?: number;
  /**
   * Columns to be push left by, with `left`, on large screens
   */
  lgPush?: number;
  /**
   * Columns to be push left by, with `left`, on extra large screens
   */
  xlPush?: number;
  /**
   * Columns to be pulled left by, with `left`, on on extra small screens
   */
  xsPull?: number;
  /**
   * Columns to be pulled left by, with `left`, on on small screens
   */
  smPull?: number;
  /**
   * Columns to be pulled left by, with `left`, on on medium screens
   */
  mdPull?: number;
  /**
   * Columns to be pulled left by, with `left`, on on large screens
   */
  lgPull?: number;
  /**
   * Columns to be pulled left by, with `left`, on on extra large screens
   */
  xlPull?: number;
}

/**
 * Placed inside rows to align content in columns.
 * The default grid has 12 divisions.
 */
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
