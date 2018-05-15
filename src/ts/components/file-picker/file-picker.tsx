import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
import Button from '../forms/button';

export interface FilePickerRenderProps {
  selectFile: () => void;
}

export type Render = (props: FilePickerRenderProps) => React.ReactElement<any>;

export interface FileProps {
  lastModified: number;
  lastModifiedDate: any;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  data: any;
}

export type FileListProps = [FileProps];

export interface FilePickerState {
  files: FileListProps | null;
}

export interface FilePickerProps
  extends ComponentProps,
  HTMLProps<HTMLElement> {
  /**
   * Takes a component as a function and renders as a child
   */
  onFilesChange: (value: any) => void;
  // render: Render;
}

export class FilePicker extends PureComponent<
  FilePickerProps,
  FilePickerState
  > {
  private constructor(props: FilePickerProps) {
    super(props);

    this.state = {
      files: null,
    };
  }

  public render() {
    const {
      className,
      children,
      // render,
      component: Component = 'div',
      onFilesChange,
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
    const { onFilesChange } = this.props;
    const files = event.dataTransfer.files;
    const output: any = [];

    Object.keys(files).map((index: any) => {
      return output.push(files[index])
    })

    if (typeof onFilesChange === 'function') {
      onFilesChange(output)
    }
  };

}

export default FilePicker;
