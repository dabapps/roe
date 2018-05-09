import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import { ComponentProps } from '../types';

export interface SliderProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Min value
   * @default 0
   */
  min?: number;
  /**
   * Max value
   * @default 1
   */
  max?: number;
  /**
   * Orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Popover
   * @default false
   */
  popover?: boolean;
  /**
   * Stepped
   * @default false
   */
  stepped?: boolean;
  /**
   * Steps
   * @default 1
   */
  steps?: number;
  /**
   * Initial 'value'
   * @default 0
   */
  initialValue?: number;
  /**
   * Initial 'from'
   * @default 0
   */
  initialFrom?: number;
  /**
   * Initial 'to'
   * @default 0
   */
  initialTo?: number;
  /**
   * Range
   * @default false
   */
  range?: boolean;
  /**
   * Exposes the 'value' on slide
   * @default
   */
  onSlide: (value: number) => any;
  /**
   * Exposes the 'value' on mouse up
   * @default
   */
  onChange?: (value: any) => any;
  /**
   * Exposes the value of range (from)
   * @default
   */
  onSlideFrom?: (value: number) => any;
  /**
   * Exposes the value of range (from) on mouse up
   * @default
   */
  onChangeFrom?: (value: number) => any;
  /**
   * Exposes the value of range (to)
   * @default
   */
  onSlideTo?: (value: number) => any;
  /**
   * Exposes the value of range (to) on mouse up
   * @default
   */
  onChangeTo?: (value: number) => any;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface IState {
  value: number;
  from: number;
  to: number;
  mouseDown?: MousePosition;
}

const INITIAL_VALUE = 0;
const MIN = 0;
const MAX = 1;
const STEPS = 1;

export interface SyntheticEvent {
  type: string;
  clientX: number;
  clientY: number;
}

export class Slider extends PureComponent<SliderProps, IState> {
  private unsubscribers: Array<() => void> = [];
  public constructor(props: SliderProps) {
    super(props);

    const { min, max } = props;

    this.state = {
      value: this.constrain(this.setInitialValue('single'), min, max),
      from: this.constrain(this.setInitialValue('from'), min, max),
      to: this.constrain(this.setInitialValue('to'), min, max),
    };

    this.onHandleDown = this.createMouseHandlers(this.onHandleDown);
    this.onHandleRangeDown = this.createMouseHandlers(this.onHandleRangeDown);
  }

  public componentWillUnmount() {
    this.unsubscribers.forEach(unsubscriber => unsubscriber());
  }

  public render() {
    const {
      className,
      min = MIN,
      max = MAX,
      popover,
      range,
      steps = STEPS,
      stepped,
      component: Component = 'div',
      orientation = 'horizontal',
      // ...remainingProps
    } = this.props;

    return (
      <Component
        // {...remainingProps}
        className={classNames(
          'roe-slider',
          orientation,
          className,
          stepped && 'stepped',
          range && 'range'
        )}
      >
        <div className="roe-bar">
          {min ? (
            <span className="roe-bar__min" style={this.setMinMaxStyle('min')} />
          ) : null}

          <div
            className="roe-handle"
            style={this.setOrientationStyle(
              range ? this.state.from : this.state.value
            )}
            onMouseDown={this.onHandleDown}
          >
            {popover && (
              <span className="roe-handle-popover">
                <span>{`${(
                  (range ? this.state.from : this.state.value) * 100
                ).toFixed(0)}`}</span>
              </span>
            )}
          </div>

          {range && (
            <div
              className="roe-handle roe-handle__range"
              style={this.setOrientationStyle(this.state.to)}
              onMouseDown={this.onHandleRangeDown}
            >
              {popover && (
                <span className="roe-handle-popover">
                  <span>{`${(this.state.to * 100).toFixed(0)}`}</span>
                </span>
              )}
            </div>
          )}

          {range && (
            <span
              className="roe-bar-range"
              style={this.setMinMaxStyle('range')}
            />
          )}

          {stepped &&
            Array.apply(null, { length: steps + 1 }).map(
              (e: any, i: number) => (
                <span
                  key={i}
                  className={classNames('roe-bar__steps', {
                    fade:
                      this.partialArithmeticSeries(steps)[i] / 100 < min ||
                      this.partialArithmeticSeries(steps)[i] / 100 > max,
                  })}
                  style={this.setOrientationStyle(
                    this.partialArithmeticSeries(steps)[i] / 100
                  )}
                />
              )
            )}

          {max && (
            <span className="roe-bar__max" style={this.setMinMaxStyle('max')} />
          )}
        </div>
      </Component>
    );
  }

  private createMouseHandlers(callback: (event: SyntheticEvent) => any) {
    function createSyntheticEvent(
      event: MouseEvent | React.MouseEvent<HTMLElement>
    ): SyntheticEvent {
      return {
        type: event.type,
        clientX: event.clientX,
        clientY: event.clientY,
      };
    }

    const onMouseMove = (event: MouseEvent) => {
      callback(createSyntheticEvent(event));
    };

    const onMouseUp = (event: MouseEvent) => {
      callback(createSyntheticEvent(event));

      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
      if (event.button === 2) {
        return;
      }

      event.preventDefault();

      callback(createSyntheticEvent(event));

      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('mousemove', onMouseMove);
    };

    this.unsubscribers.push(() => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    });

    return onMouseDown;
  }

  private constrain(
    value: number | string | undefined,
    min: number | string | undefined,
    max: number | string | undefined
  ) {
    return Math.min(
      Math.max(
        typeof value === 'undefined' ? MIN : parseFloat(value.toString()),
        typeof min === 'undefined' ? MIN : parseFloat(min.toString())
      ),
      typeof max === 'undefined' ? MAX : parseFloat(max.toString())
    );
  }

  private arithmeticSeries = (start: number, end: number, steps: number) => {
    return Array.apply(null, { length: steps + 1 }).map(
      (item: number, index: number) => start + index * ((end - start) / steps)
    );
  };

  private partialArithmeticSeries = (steps: number) =>
    this.arithmeticSeries(0, 100, steps);

  private getClosestValue = (value: number) => {
    const { steps = STEPS } = this.props;

    const result: number[] = [];

    this.partialArithmeticSeries(steps).forEach(
      (curr: number, index: number) => {
        result.push(Math.abs(curr - value * 100));
      }
    );

    return (
      this.partialArithmeticSeries(steps)[
        result.indexOf(Math.min.apply(Math, result))
      ] / 100
    );
  };

  private onHandleDown = (event: SyntheticEvent) => {
    const { stepped, range } = this.props;

    if (!range) {
      this.setState({
        value: stepped
          ? this.getClosestValue(this.getValueOnMove(event, 'from'))
          : this.getValueOnMove(event, 'from'),
      });

      if (
        event.type === 'mouseup' &&
        typeof this.props.onChange === 'function'
      ) {
        this.props.onChange(this.state.value);
      }

      this.props.onSlide(this.state.value);
    } else {
      this.setState({
        from: stepped
          ? this.getClosestValue(this.getValueOnMove(event, 'from'))
          : this.getValueOnMove(event, 'from'),
      });

      if (
        event.type === 'mouseup' &&
        typeof this.props.onChangeFrom === 'function'
      ) {
        this.props.onChangeFrom(this.state.from);
      }

      if (typeof this.props.onSlideFrom === 'function') {
        this.props.onSlideFrom(this.state.from);
      }
    }
  };

  private onHandleRangeDown = (event: SyntheticEvent) => {
    const { stepped } = this.props;

    this.setState({
      to: stepped
        ? this.getClosestValue(this.getValueOnMove(event, 'to'))
        : this.getValueOnMove(event, 'to'),
    });

    if (
      event.type === 'mouseup' &&
      typeof this.props.onChangeTo === 'function'
    ) {
      this.props.onChangeTo(this.state.to);
    }

    if (typeof this.props.onSlideTo === 'function') {
      this.props.onSlideTo(this.state.to);
    }
  };

  private setInitialValue = (pointer: string) => {
    const {
      initialValue = INITIAL_VALUE,
      initialFrom = INITIAL_VALUE,
      initialTo = INITIAL_VALUE,
      min = MIN,
      max = MAX,
      range,
    } = this.props;

    if (range) {
      if (pointer === 'from') {
        if (initialFrom && initialFrom < min) {
          return min;
        }
        if (initialFrom && initialFrom > max) {
          return max;
        }
        return initialFrom;
      }

      if (pointer === 'to') {
        if (initialTo && initialTo < min) {
          return min;
        } else if (initialTo && initialTo > max) {
          return max;
        }
        return initialTo;
      }
    }

    if (pointer === 'single' && !range) {
      if (initialValue < min) {
        return min;
      }
      if (initialValue > max) {
        return max;
      }
      return initialValue;
    }
  };

  private setMinMaxStyle = (position: string) => {
    const { orientation = 'horizontal', min = MIN, max = MAX } = this.props;

    const { from, to } = this.state;

    if (orientation === 'horizontal') {
      if (position === 'min') {
        return { width: `${parseFloat(min.toString()) * 100}%` };
      } else if (position === 'max') {
        return { width: `${100 - parseFloat(max.toString()) * 100}%` };
      }

      // (position === 'range')
      return {
        left: `${parseFloat(from.toString()) * 100}%`,
        right: `${100 - parseFloat(to.toString()) * 100}%`,
      };
    }
    // (orientation === 'vertical')
    if (position === 'min') {
      return { height: `${parseFloat(min.toString()) * 100}%` };
    } else if (position === 'max') {
      return { height: `${100 - parseFloat(max.toString()) * 100}%` };
    }

    // (position === 'range')
    return {
      top: `${parseFloat(from.toString()) * 100}%`,
      bottom: `${100 - parseFloat(to.toString()) * 100}%`,
    };
  };

  private setOrientationStyle = (value: number) => {
    const { orientation = 'horizontal' } = this.props;

    if (orientation === 'vertical') {
      return { top: `${value * 100}%` };
    }

    return { left: `${value * 100}%` };
  };

  private setBoundaryValue(pointer: string, value: string) {
    const { min = MIN, max = MAX } = this.props;

    const { from, to } = this.state;

    if (pointer === 'from' && (value === 'max' && to <= max)) {
      return to;
    }

    if (pointer === 'from' && value === 'max') {
      return max;
    }

    if (pointer === 'from' && value === 'min') {
      return min;
    }

    if (pointer === 'to' && (value === 'min' && from >= min)) {
      return from;
    }

    if (pointer === 'to' && value === 'min') {
      return min;
    }

    return max;
  }

  private getValueOnMove = (event: SyntheticEvent, pointer: string) => {
    const {
      orientation = 'horizontal',
      min = MIN,
      max = MAX,
      range,
    } = this.props;

    const node = ReactDOM.findDOMNode(this);
    const { top, left, width, height } = node.getBoundingClientRect();

    if (orientation === 'vertical') {
      return this.constrain(
        (event.clientY - top) / height,
        range ? this.setBoundaryValue(pointer, 'min') : min,
        range ? this.setBoundaryValue(pointer, 'max') : max
      );
    }

    return this.constrain(
      (event.clientX - left) / width,
      range ? this.setBoundaryValue(pointer, 'min') : min,
      range ? this.setBoundaryValue(pointer, 'max') : max
    );
  };
}

export default Slider;
