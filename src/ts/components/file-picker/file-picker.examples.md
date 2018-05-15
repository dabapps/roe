#### Example

```js
class FilePickerExample extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      files: null
    }

    this.onFilesChanged = this.onFilesChanged.bind(this);
  }

  onFilesChanged (files) {
    this.setState({
      files
    });
  }

  render () {
    const { files } = this.state;
    return (
      <FilePicker onFilesChange={(value) => this.onFilesChanged(value)}>
        {files && files.map((file, index) => (
          <FileThumbnail key={index} file={file} />
        ))}
        {files && files.map((file, index) => (
          <p key={index}>
            {file.name}
          </p>
        ))}
      </FilePicker>
    );
  }
}
// <div>
//   <FilePicker
//     render={({ selectFile} ) => (
//       <div onDrop={selectFile}>
//         <p>
//           Drop files here or
//           <a
//             className={'s'}
//             onClick={selectFile}> click to browse
//           </a>
//         </p>
//       </div>
//     )}
//   />
// </div>
<FilePickerExample />
```

#### Less variables

```less

```
