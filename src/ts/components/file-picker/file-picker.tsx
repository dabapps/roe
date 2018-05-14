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

        {/* {this.state.file && <img src={this.state.file} />} */}
        {
          // console.log('FILES', this.state.files)
        }

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
    const { onFilesChange } = this.props;
    event.preventDefault();

    const files = event.dataTransfer.files;

    const output: any = [];

    // console.log(files);

    Object.keys(files).map((index: any) => {
      // return output.push({
      //   name: files[index].name,
      //   size: files[index].size,
      //   // lastModified: files[index].lastModified,
      //   lastModifiedDate: files[index].lastModifiedDate,
      //   type: files[index].type,
      //   data: this.handleUpload(files[index]),
      // })
      return output.push(files[index])
    })

    // console.log('output', output)

    if (typeof onFilesChange === 'function') {
      onFilesChange(output)
    }

  };

  // private readUploadedFileDataURL = (inputFile: any) => {
  //   const temporaryFileReader = new FileReader();

  //   return new Promise((resolve: any, reject: any) => {
  //     temporaryFileReader.onerror = () => {
  //       temporaryFileReader.abort();
  //       reject(new Error("Problem parsing input file."));
  //     };

  //     temporaryFileReader.onload = () => {
  //       resolve(temporaryFileReader.result);
  //     };
  //     temporaryFileReader.readAsDataURL(inputFile);
  //   });
  // };

  // private handleUpload = async (file: any) => {

  //   try {
  //     const fileContents = await this.readUploadedFileDataURL(file);
  //     // console.log(fileContents);
  //     return fileContents;
  //   } catch (e) {
  //     console.warn(e.message)
  //   }
  // }

}

export default FilePicker;
