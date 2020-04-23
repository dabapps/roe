import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ComponentProps } from '../../types';
import {
  convertPercentageStepToStep,
  convertStepToPercentageStep,
  getClosestValue,
  getStepSeries,
} from '../../utils/slider';

export const PERCENTAGE_MIN = 0;
export const PERCENTAGE_MAX = 1;

export type Range = Readonly<{
  from: number;
  to: number;
}>;

export interface SliderProps extends ComponentProps {
  /**
   * Minimum value allowed to be selected in range
   */
  min: number;
  /**
   * Maximum value allowed to be selected in range
   */
  max: number;
  /**
   * Stepsize for increasing/decreasing range
   */
  step: number;
  /**
   * Initial values for from and to value
   */
  initialValue?: Range;
  /**
   * What should happen to range value on change?
   */
  onChange: (value: Range) => void;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface StateProps {
  from: number;
  to: number;
  mouseDown?: MousePosition;
}

export interface SyntheticMouseEvent {
  type: string;
  clientX: number;
}

export interface SyntheticTouchEvent {
  type: string;
  targetTouches: TouchList | React.TouchList;
}

const isSyntheticMouseEvent = (
  event: SyntheticMouseEvent | SyntheticTouchEvent
): event is SyntheticMouseEvent => event.hasOwnProperty('clientX');

export class Slider extends React.PureComponent<SliderProps, StateProps> {
  private unsubscribers: Array<() => void> = [];
  private stepSeries: ReadonlyArray<number>;
  private percentageStepSeries: ReadonlyArray<number>;
  private onHandleMouseFrom: (event: SyntheticMouseEvent) => void;
  private onHandleMouseTo: (event: SyntheticMouseEvent) => void;
  private onHandleTouchFrom: (event: SyntheticTouchEvent) => void;
  private onHandleTouchTo: (event: SyntheticTouchEvent) => void;

  public constructor(props: SliderProps) {
    super(props);

    const { min, max, step } = props;

    this.stepSeries = getStepSeries(step, min, max);
    this.percentageStepSeries = this.stepSeries.map(value =>
      convertStepToPercentageStep(min, max, value)
    );

    const initialValue = {
      from: props.initialValue ? props.initialValue.from : min,
      to: props.initialValue ? props.initialValue.to : max,
    };

    this.state = this.convertRangeToPercentageRange(initialValue);

    this.onHandleMouseFrom = this.createMouseHandlers(this.onHandleFrom);
    this.onHandleMouseTo = this.createMouseHandlers(this.onHandleTo);
    this.onHandleTouchFrom = this.createTouchHandlers(this.onHandleFrom);
    this.onHandleTouchTo = this.createTouchHandlers(this.onHandleTo);
  }

  public componentWillUnmount() {
    this.unsubscribers.forEach(unsubscriber => unsubscriber());
  }

  public render() {
    const {
      min,
      max,
      initialValue,
      onChange,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className="slider">
        <div className="bar">
          <span className="default" />

          <div
            className="control"
            style={this.getControlStyle(this.state.from)}
            onMouseDown={this.onHandleMouseFrom}
            onTouchMove={this.onHandleTouchFrom}
          />

          <span className="range" style={this.getRangeStyle()} />

          <div
            className="control"
            style={this.getControlStyle(this.state.to)}
            onMouseDown={this.onHandleMouseTo}
            onTouchMove={this.onHandleTouchTo}
          />

          <span className="default" />
        </div>
      </Component>
    );
  }

  private getControlStyle = (value: number) => {
    return { left: `${value * 100}%` };
  };

  private getRangeStyle = () => {
    const { from, to } = this.state;

    return {
      left: `${from * 100}%`,
      right: `${100 - to * 100}%`,
    };
  };

  private convertRangeToPercentageRange(range: Range) {
    const { min, max } = this.props;
    return {
      from: convertStepToPercentageStep(min, max, range.from),
      to: convertStepToPercentageStep(min, max, range.to),
    };
  }

  private convertPercentageRangeToRange(range: Range) {
    const { min, max } = this.props;
    return {
      from: getClosestValue(
        this.stepSeries,
        convertPercentageStepToStep(min, max, range.from)
      ),
      to: getClosestValue(
        this.stepSeries,
        convertPercentageStepToStep(min, max, range.to)
      ),
    };
  }

  private createTouchHandlers(callback: (event: SyntheticTouchEvent) => void) {
    function createSyntheticEvent(
      event: TouchEvent | React.TouchEvent<HTMLElement>
    ): SyntheticTouchEvent {
      return {
        type: event.type,
        targetTouches: event.targetTouches,
      };
    }

    const onTouchMove = (event: TouchEvent) => {
      callback(createSyntheticEvent(event));
    };

    const onTouchEnd = (event: TouchEvent) => {
      callback(createSyntheticEvent(event));

      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
    };

    const onTouchDown = (event: React.TouchEvent<HTMLElement>) => {
      callback(createSyntheticEvent(event));

      window.addEventListener('touchend', onTouchEnd);
      window.addEventListener('touchmove', onTouchMove);
    };

    this.unsubscribers.push(() => {
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    });

    return onTouchDown;
  }

  private createMouseHandlers(callback: (event: SyntheticMouseEvent) => void) {
    function createSyntheticEvent(
      event: MouseEvent | React.MouseEvent<HTMLElement>
    ): SyntheticMouseEvent {
      return {
        type: event.type,
        clientX: event.clientX,
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

  private onHandleFrom = (event: SyntheticMouseEvent | SyntheticTouchEvent) => {
    this.setState({
      from: getClosestValue(
        this.percentageStepSeries,
        this.getValueOnMove(event, 'from')
      ),
    });

    if (event.type === 'mouseup' || event.type === 'touchend') {
      this.props.onChange(
        this.convertPercentageRangeToRange({
          from: this.state.from,
          to: this.state.to,
        })
      );
    }
  };

  private onHandleTo = (event: SyntheticMouseEvent | SyntheticTouchEvent) => {
    this.setState({
      to: getClosestValue(
        this.percentageStepSeries,
        this.getValueOnMove(event, 'to')
      ),
    });

    if (event.type === 'mouseup' || event.type === 'touchend') {
      this.props.onChange(
        this.convertPercentageRangeToRange({
          from: this.state.from,
          to: this.state.to,
        })
      );
    }
  };

  private constrain(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  private getBoundaryValue(
    pointer: 'from' | 'to',
    value: 'min' | 'max'
  ): number {
    const { from, to } = this.state;

    if (pointer === 'from' && value === 'max') {
      return Math.min(to, PERCENTAGE_MAX);
    }

    if (pointer === 'from' && value === 'min') {
      return PERCENTAGE_MIN;
    }

    if (pointer === 'to' && value === 'min') {
      return Math.max(from, PERCENTAGE_MIN);
    }

    return PERCENTAGE_MAX;
  }

  private getXCoordinateFromEvent = (
    event: SyntheticMouseEvent | SyntheticTouchEvent
  ): number | null => {
    if (isSyntheticMouseEvent(event)) {
      return event.clientX;
    }
    return event.targetTouches.length > 0
      ? event.targetTouches[0].clientX
      : null;
  };

  private getValueOnMove = (
    event: SyntheticMouseEvent | SyntheticTouchEvent,
    pointer: 'from' | 'to'
  ) => {
    const node = ReactDOM.findDOMNode(this) as Element;
    const { left, width } = node.getBoundingClientRect();

    const x = this.getXCoordinateFromEvent(event);

    if (x === null) {
      return this.state[pointer];
    }

    return this.constrain(
      (x - left) / width,
      this.getBoundaryValue(pointer, 'min'),
      this.getBoundaryValue(pointer, 'max')
    );
  };
}

export default Slider;
