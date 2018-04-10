import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import { ComponentProps } from '../types';

export interface SliderProps extends ComponentProps, HTMLProps<HTMLElement> {
  max?: number;
  min?: number;
  orientation?: 'horizontal' | 'vertical';
  popover?: boolean;
  stepped?: boolean;
  steps?: number;
  value?: number;
  from?: number;
  to?: number;
  initialValue?: number;
  initialFrom?: number;
  initialTo?: number;
  range?: boolean;
  onSlide: (value: any) => any;
  onChange?: (value: any) => any;
  onSlideFrom?: (value: any) => any;
  onChangeFrom?: (value: any) => any;
  onSlideTo?: (value: any) => any;
  onChangeTo?: (value: any) => any;
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

export interface SyntheticEvent {
  type: string;
  clientX: number;
  clientY: number;
}

export class Slider extends PureComponent<SliderProps, IState> {
  private unsubscribers: Array<() => void> = [];
  public constructor(props: SliderProps) {
    super(props);

    const {
      min,
      max,
    } = props;

    // TODO: Should handle initial values if defined
    // TODO: Should handle limiting from / to, by from / to, if using ranged values
    // (do not let to be after from or vice versa)
    this.state = {
      value: this.constrain(this.setInitialValue('single'), min, max),
      from: this.constrain(this.setInitialValue('from'), min, max),
      to: this.constrain(this.setInitialValue('to'), min, max),
    };

    this.onHandle1Down = this.createMouseHandlers(this.onHandle1Down);
    this.onHandle2Down = this.createMouseHandlers(this.onHandle2Down);
  }

  public componentWillUnmout () {
    this.unsubscribers.forEach((unsubscriber) => unsubscriber());
  }

  public render() {
    const {
      children,
      className,
      min,
      max,
      popover,
      range,
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
        )}
      >
        <div className="roe-bar">
          {min && <span className="roe-bar__min" style={this.setMinMaxStyle('min')} />}

          <div
            className="roe-handle"
            style={this.setHandleStyle(range ? this.state.from : this.state.value)}
            onMouseDown={this.onHandle1Down}
          >
            {popover &&
              <span className="roe-handle__popover">
                {`${((range ? this.state.from : this.state.value) * 100).toFixed(0)}`}
              </span>
            }
          </div>

          {
            range && (
              <div
                className="roe-handle roe-handle__range"
                style={this.setHandleStyle(this.state.to)}
                onMouseDown={this.onHandle2Down}
              >
                {popover &&
                  <span className="roe-handle__popover">
                    {`${((this.state.to) * 100).toFixed(0)}`}
                  </span>
                }
              </div>
            )
          }

          {range && <span className="roe-bar__range" style={this.setMinMaxStyle('range')} />}
          {max && <span className="roe-bar__max" style={this.setMinMaxStyle('max')} />}
        </div>
      </Component>
    );
  }

  private createMouseHandlers(callback: (event: SyntheticEvent) => any) {
    function createSyntheticEvent(event: MouseEvent | React.MouseEvent<HTMLElement>): SyntheticEvent {
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

  private constrain (
    value: number | string | undefined,
    min: number | string | undefined,
    max: number | string | undefined,
  ) {
    return Math.min(
      Math.max(
        typeof value === 'undefined' ? MIN : parseFloat(value.toString()),
        typeof min === 'undefined' ? MIN : parseFloat(min.toString())
      ),
      typeof max === 'undefined' ? MAX : parseFloat(max.toString())
    );
  }

  private onHandle1Down = (event: SyntheticEvent) => {
    if (!this.props.range) {
      this.setState({
        value: this.getValueOnMove(event, 'from')
      });

      if (event.type === 'mouseup') {
        // TODO: Call change and slide

      } else {
        // TODO: Call slide

      }
    } else {
      this.setState({
        from: this.getValueOnMove(event, 'from')
      });
      // TODO: Call handler

    }

  }

  private onHandle2Down = (event: SyntheticEvent) => {
    this.setState({
      to: this.getValueOnMove(event, 'to')
    });
    // TODO: Call handler
  }

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
  }

  private setMinMaxStyle = (position: string) => {
    const {
      min = MIN,
      max = MAX,
      orientation = 'horizontal',
    } = this.props;

    if (orientation === 'horizontal') {

      if (position === 'min') {
        return { width: `${parseFloat(min.toString()) * 100}%` }
      } else if (position === 'max') {
        return { width: `${100 - (parseFloat(max.toString()) * 100)}%` }
      }

    } else if (orientation === 'vertical') {

      if (position === 'min') {
        return { height: `${parseFloat(min.toString()) * 100}%` }
      } else if (position === 'max') {
        return { height: `${100 - (parseFloat(max.toString()) * 100)}%` }
      }

    }
  }

  private setHandleStyle = (value: number) => {
    const { orientation = 'horizontal' } = this.props;

    if (orientation === 'horizontal') {
      return { left: `${value * 100}%` }
    }

    if (orientation === 'vertical') {
      return { top: `${value * 100}%` }
    }

  }

  private setBoundaryValue (pointer: string, value: string) {
    const {
      min = MIN,
      max = MAX,
    } = this.props;
    const { from, to } = this.state;

    if (pointer === 'from') {
      if (value === 'max' && to <= max) {
        return to;
      } else if (value === 'max' && to >= max) {
        return max;
      }
      if (value === 'min') {
        return min;
      }
    }

    if (pointer === 'to') {
      if (value === 'min' && from >= min) {
        return from;
      } else if (value === 'min' && from <= min) {
        return min;
      }
      if (value === 'max') {
        return max;
      }
    }

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
      return this.constrain((event.clientY - top) / height,
        range ? this.setBoundaryValue(pointer, 'min') : min,
        range ? this.setBoundaryValue(pointer, 'max') : max,
      );
    }

    return this.constrain((event.clientX - left) / width,
      range ? this.setBoundaryValue(pointer, 'min') : min,
      range ? this.setBoundaryValue(pointer, 'max') : max,
    );

  }

}

export default Slider;
