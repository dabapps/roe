import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
  IntrinsicElementType,
} from '../../types';
import { memoWithComponentProp } from '../../utils';

const ENOUGH_TIME_FOR_RERENDER = 50;
const DEFAULT_HEIGHT = 0;
const DEFAULT_DURATION = 200;
const DEFAULT_FADE_HEIGHT = 50;
const DEFAULT_TRANSPARENT_COLOR = 'rgba(255, 255, 255, 0)';
const DEFAULT_FADE_COLOR = 'rgba(255, 255, 255, 1)';

export interface CollapsePropsBase {
  /**
   * Whether the collapse is open or not
   * @default false
   */
  open: boolean;
  /**
   * Duration of the animation (milliseconds)
   * @default 200
   */
  animationDuration?: number;
  /**
   * Maximum height when collapsed
   * @default 0
   */
  maxCollapsedHeight?: number | string;
  /**
   * Minimum height
   * @default auto
   */
  minHeight?: number | string;
  /**
   * Whether to fade out the content
   * @default false
   */
  fadeOut?: boolean;
  /**
   * Color to fade to
   * @default rgba(255, 255, 255, 1)
   */
  fadeColor?: string;
  /**
   * Transparent color to fade from (this should be a transparent version of the fadeColor)
   * @default rgba(255, 255, 255, 0)
   */
  transparentColor?: string;
  /**
   * Height of the faded area
   * @default 50
   */
  fadeHeight?: number;
}

export type CollapseProps<
  C extends IntrinsicElementType = 'div'
> = OptionalComponentProp<C> & CollapsePropsBase;

export interface CollapseState {
  height: number | string;
  opened: boolean;
  opening: boolean;
}

/**
 * Component to expand and collapse content, optionally displaying a small preview.
 */
export const Collapse: FunctionComponentOptionalComponentProp<
  'div',
  CollapsePropsBase
> = (props: CollapseProps) => {
  const {
    children,
    className,
    fadeOut,
    fadeColor = DEFAULT_FADE_COLOR,
    fadeHeight = DEFAULT_FADE_HEIGHT,
    transparentColor = DEFAULT_TRANSPARENT_COLOR,
    open,
    maxCollapsedHeight = DEFAULT_HEIGHT,
    minHeight = undefined,
    animationDuration = DEFAULT_DURATION,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const elementRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<number>();
  const prevProps = React.useRef(props);

  const [state, setState] = React.useState({
    height: maxCollapsedHeight,
    opening: false,
    opened: open,
  });

  React.useEffect(() => {
    if (props.open !== prevProps.current.open) {
      window.clearTimeout(timeoutRef.current);

      setState({
        opened: false,
        opening: prevProps.current.open,
        height: props.open
          ? props.maxCollapsedHeight ?? DEFAULT_HEIGHT
          : elementRef.current?.scrollHeight ?? 0,
      });

      timeoutRef.current = window.setTimeout(() => {
        setState({
          opened: false,
          opening: props.open,
          height: props.open
            ? elementRef.current?.scrollHeight ?? 0
            : props.maxCollapsedHeight ?? DEFAULT_HEIGHT,
        });

        timeoutRef.current = window.setTimeout(() => {
          setState(prevState => ({
            ...prevState,
            opened: props.open,
            opening: props.open,
          }));
        }, props.animationDuration ?? DEFAULT_DURATION);
      }, ENOUGH_TIME_FOR_RERENDER);
    }

    prevProps.current = props;
  }, [props]);

  React.useEffect(() => {
    setState(prevState => ({
      ...prevState,
      height: open ? elementRef.current?.scrollHeight ?? 0 : maxCollapsedHeight,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  const { opening, opened, height } = state;

  const collapseStyle = {
    minHeight,
    maxHeight: opened ? undefined : height,
    position: 'relative' as const,
    overflow: (opened ? undefined : 'hidden') as 'hidden' | undefined,
    transition: `ease-in-out ${animationDuration}ms max-height`,
  };

  const fadeStyle = {
    height: fadeHeight,
    width: '100%',
    position: 'absolute' as const,
    bottom: 0,
    opacity: opening ? 0 : 1,
    background: `linear-gradient(${transparentColor}, ${fadeColor} 80%)`,
    transition: `ease-in-out ${animationDuration}ms opacity`,
  };

  return (
    <Component
      ref={elementRef}
      {...remainingProps}
      className={classNames(
        'clearfix collapse',
        open ? 'collapse-open' : null,
        className
      )}
      style={collapseStyle}
    >
      {children}
      {fadeOut && !opened && (
        <div className="collapse-fade" style={fadeStyle} />
      )}
    </Component>
  );
};

export default memoWithComponentProp(Collapse);
