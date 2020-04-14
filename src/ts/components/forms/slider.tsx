import * as classnames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ComponentProps } from '../../types';
import { PERCENTAGE_MAX, PERCENTAGE_MIN } from './slider/constants';
import { Range } from './slider/types';
import {
  convertPercentageStepToStep,
  convertStepToPercentageStep,
  getClosestValue,
  getStepSeries,
} from './slider/utils';

interface SliderProps extends ComponentProps {
  min: number;
  max: number;
  step: number;
  initialValue?: Range;
  onChange: (value: Range) => void;
}

interface MousePosition {
  x: number;
  y: number;
}

interface StateProps {
  from: number;
  to: number;
  mouseDown?: MousePosition;
}

interface SyntheticMouseEvent {
  type: string;
  clientX: number;
}

interface SyntheticTouchEvent {
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

    this.onHandleMouseFrom = this.createMouseHandlers(this.onHandleFrom) as (
      event: SyntheticMouseEvent
    ) => void;

    this.onHandleMouseTo = this.createMouseHandlers(this.onHandleTo) as (
      event: SyntheticMouseEvent
    ) => void;

    this.onHandleTouchFrom = this.createTouchHandlers(this.onHandleFrom) as (
      event: SyntheticTouchEvent
    ) => void;

    this.onHandleTouchTo = this.createTouchHandlers(this.onHandleTo) as (
      event: SyntheticTouchEvent
    ) => void;
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
      <Component
        {...remainingProps}
        className={classnames('slider', 'stepped', 'range')}
      >
        <div className="bar">
          <span className="bar-min" style={this.setMinMaxStyle('min')} />

          <div
            className="handle"
            style={this.setOrientationStyle(this.state.from)}
            onMouseDown={this.onHandleMouseFrom}
            onTouchMove={this.onHandleTouchFrom}
          />

          <div
            className="handle handle-range"
            style={this.setOrientationStyle(this.state.to)}
            onMouseDown={this.onHandleMouseTo}
            onTouchMove={this.onHandleTouchTo}
          />

          <span
            className="bar-range"
            style={this.setMinMaxStyle('range')}
          />

          <span className="bar-max" style={this.setMinMaxStyle('max')} />
        </div>
      </Component>
    );
  }

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

  private setMinMaxStyle = (position: 'min' | 'max' | 'range') => {
    const { from, to } = this.state;

    if (position === 'min') {
      return { width: `0%` };
    } else if (position === 'max') {
      return { width: `100%` };
    }

    return {
      left: `${parseFloat(from.toString()) * 100}%`,
      right: `${100 - parseFloat(to.toString()) * 100}%`,
    };
  };

  private constrain(
    value: number | string | undefined,
    min: number | string | undefined,
    max: number | string | undefined
  ) {
    return Math.min(
      Math.max(
        typeof value === 'undefined'
          ? PERCENTAGE_MIN
          : parseFloat(value.toString()),
        typeof min === 'undefined' ? PERCENTAGE_MIN : parseFloat(min.toString())
      ),
      typeof max === 'undefined' ? PERCENTAGE_MAX : parseFloat(max.toString())
    );
  }

  private setOrientationStyle = (value: number) => {
    return { left: `${value * 100}%` };
  };

  private getBoundaryValue(pointer: 'from' | 'to', value: 'min' | 'max') {
    const { from, to } = this.state;

    if (pointer === 'from' && value === 'max' && to <= PERCENTAGE_MAX) {
      return to;
    }

    if (pointer === 'from' && value === 'max') {
      return PERCENTAGE_MAX;
    }

    if (pointer === 'from' && value === 'min') {
      return PERCENTAGE_MIN;
    }

    if (pointer === 'to' && value === 'min' && from >= PERCENTAGE_MIN) {
      return from;
    }

    if (pointer === 'to' && value === 'min') {
      return PERCENTAGE_MIN;
    }

    return PERCENTAGE_MAX;
  }

  private getXCoordinateFromEvent = (
    event: SyntheticMouseEvent | SyntheticTouchEvent
  ) => {
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
