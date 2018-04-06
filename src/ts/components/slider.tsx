import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../types';

export interface SliderProps extends ComponentProps, HTMLProps<HTMLElement> {
  initialValue?: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface IState {
  value: number;
  mouseDown?: MousePosition;
}

export class Slider extends PureComponent<SliderProps, IState> {

  public constructor(props: SliderProps) {
    super(props);

    this.state = {
      value: props.initialValue || 0,
    };
  }

  public render() {
    const {
      children,
      className,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('slider', className)}
      >
        <div className="bar">
          <div
            className="dragger"
            style={{ left: `${this.state.value * 100}%` }}
            onMouseDown={this.onMouseDown}
          />
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
    const { mouseDown } = this.state;

    const node = ReactDOM.findDOMNode(this);
    const { left, width } = node.getBoundingClientRect();

    if (mouseDown) {
      this.setState({
        value: Math.max(Math.min((event.pageX - left) / width, 1), 0),
      });
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

  private handleOnDragStart = (event: any) => {
    console.log(event.target.offsetLeft);
  }
}

export default Slider;
