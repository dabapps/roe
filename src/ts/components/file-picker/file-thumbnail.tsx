import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export interface FileThumbnailProps
  extends ComponentProps,
  HTMLProps<HTMLElement> {
  /**
   *
   */
  file: any;
}

export class FileThumbnail extends PureComponent<
  FileThumbnailProps,
  {}
  > {

  public render() {
    const {
      className,
      children,
      component: Component = 'div',
      file,
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('roe-file-thumbnail', className)}
      >
        {console.log('console', this.readUploadedFileDataURL())}

        {/* <img
          // className="tt"
          // src={this.readUploadedFileDataURL()}
          // height="42" width="42"
        /> */}
      </Component>
    );
  }

  private readUploadedFileDataURL = () => {
    const { file } = this.props;
    const temporaryFileReader = new FileReader();
    let image;
    temporaryFileReader.onload = (e: any) => {
      console.log('result', e.target.result)
      return image = e.target.result;
    };
    if (file) {
      temporaryFileReader.readAsDataURL(file);
    }
    console.log('image', image)
    return image;
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

  // private handleReadFile = async () => {
  //   const { file } = this.props;

  //   try {
  //     const fileContents = await this.readUploadedFileDataURL(file);
  //     // console.log(fileContents);
  //     return fileContents;
  //   } catch (e) {
  //     console.warn(e.message)
  //   }
  // }

}

export default FileThumbnail;
