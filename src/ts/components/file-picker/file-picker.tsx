import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import Button from '../forms/button';

export interface FilePickerRenderProps {
  selectFile: () => void;
}

export type Render = (props: FilePickerRenderProps) => React.ReactElement<any>;

export interface SyntheticEvent {
  type: string;
}

export interface FilePickerState {
  file: any;
}

export interface FilePickerProps
  extends ComponentProps,
    HTMLProps<HTMLElement> {
  /**
   * Takes a component as a function and renders as a child
   */
  render: Render;
}

export class FilePicker extends PureComponent<
  FilePickerProps,
  FilePickerState
> {
  private constructor(props: FilePickerProps) {
    super(props);

    this.state = {
      file: null,
    };
  }

  public render() {
    const {
      className,
      children,
      render,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('roe-file-picker roe-drop-zone', className)}
      >
        <div
          onDragOver={this.onDragOver}
          className="roe-drop-zone"
          onDrop={this.onDrop}
        />

        {this.state.file && <img src={this.state.file} />}

        {/* {render && render({ selectFile: this.onDrop })} */}

        {children}
      </Component>
    );
  }

  private onDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  private onDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();

    const reader = new FileReader();

    Array(event.dataTransfer.files[0]).map((file: any) => {
      reader.readAsDataURL(file);
    });

    reader.onload = (e: any) =>
      this.setState({
        file: e.target.result,
      });
  };
}

export default FilePicker;
