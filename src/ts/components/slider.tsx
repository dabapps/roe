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
      component: Component = 'div',
      orientation = 'vertical',
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
          {min && <span className="roe-bar__min" style={{ width: `${min * 100}%`}} />}
            <div
              className="roe-handle"
              style={{ left: `${this.state.value * 100}%` }}
              onMouseDown={this.onMouseDown}
            />
            {max && <span className="roe-bar__max" style={{ width: `${100 - (max * 100)}%` }} />}
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
    const { left, width } = node.getBoundingClientRect();

    if (mouseDown) {
      this.setState({
        value: Math.max(Math.min((event.pageX - left) / width, max), min),
      });

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
}

export default Slider;
