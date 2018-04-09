import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import { ComponentProps } from '../types';

export interface SliderProps extends ComponentProps, HTMLProps<HTMLElement> {
  initialValue?: number;
  max?: number;
  min?: number;
  orientation?: 'horizontal' | 'vertical';
  popover?: boolean;
  onChange: (value: any) => void;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface IState {
  value: number;
  mouseDown?: MousePosition;
}

const INITIAL_VALUE = 0;
const MIN = 0;
const MAX = 1;

export class Slider extends PureComponent<SliderProps, IState> {

  public constructor(props: SliderProps) {
    super(props);

    this.state = {
      value: this.setInitialValue(),
    };
  }

  public render() {
    const {
      children,
      className,
      min,
      max,
      popover,
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
              style={this.setHandleStyle()}
              onMouseDown={this.onMouseDown}
            >
              {popover &&
                <span className="roe-handle__popover">
                  {`${((this.state.value) * 100).toFixed(0)}`}
                </span>
              }
            </div>
          {max && <span className="roe-bar__max" style={this.setMinMaxStyle('max')} />}
        </div>
      </Component>
    );
  }

  private onMouseDown = (event: any) => {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);

    this.setState({
      mouseDown: {
        x: event.pageX,
        y: event.pageY,
      }
    });
  }

  private onMouseMove = (event: any) => {
    const { min = MIN, max = MAX } = this.props;
    const { mouseDown } = this.state;

    const node = ReactDOM.findDOMNode(this);

    if (mouseDown) {
      this.setState(() => this.setValueOnMove(event, node));
      this.props.onChange(this.state.value);
    }
  }

  private onMouseUp = (event: any) => {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);

    if (this.state.mouseDown) {
      this.setState({
        mouseDown: undefined,
      });
    }
  }

  private setInitialValue = () => {
    const {
      initialValue = INITIAL_VALUE,
      min = MIN,
      max = MAX,
    } = this.props;

    if (initialValue < min) {
      return min;
    }

    if (initialValue > max) {
      return max;
    }

    return initialValue;
  }

  private setMinMaxStyle = (position: string) => {
    const {
      min = MIN,
      max = MAX,
      orientation = 'horizontal',
    } = this.props;

    if (orientation === 'horizontal') {

      if (position === 'min') {
        return { width: `${min * 100}%` }
      } else if (position === 'max') {
        return { width: `${100 - (max * 100)}%` }
      }

    } else if (orientation === 'vertical') {

      if (position === 'min') {
        return { height: `${min * 100}%` }
      } else if (position === 'max') {
        return { height: `${100 - (max * 100)}%` }
      }

    }
  }

  private setHandleStyle = () => {
    const { orientation = 'horizontal' } = this.props;
    const { value } = this.state;

    if (orientation === 'horizontal') {
      return { left: `${value * 100}%` }
    }

    if (orientation === 'vertical') {
      return { top: `${value * 100}%` }
    }
  }

  private setValueOnMove = (event: any, node: any) => {
    const {
      min = MIN,
      max = MAX,
      orientation = 'horizontal',
    } = this.props;

    const { top, left, width, height } = node.getBoundingClientRect();

    if (orientation === 'horizontal') {
      return { value: Math.max(Math.min((event.pageX - left) / width, max), min),}
    }

    if (orientation === 'vertical') {
      return { value: Math.max(Math.min((event.pageY - top - window.pageYOffset) / height, max), min)}
    }
  }
}

export default Slider;
