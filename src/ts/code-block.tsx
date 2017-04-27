import * as classNames from 'classnames';
import * as React from 'react';
import * as hljs from 'highlight.js';

interface IProps extends React.HTMLProps<HTMLPreElement> {
  children?: string;
}

export class CodeBlock extends React.Component<IProps, any> {
  element: HTMLPreElement;

  private constructor (props: IProps) {
    super(props);

    this.highlightBlock = this.highlightBlock.bind(this);
  }

  private highlightBlock (element: HTMLPreElement) {
    this.element = element;

    hljs.highlightBlock(this.element);
  }

  public componentDidUpdate () {
    hljs.highlightBlock(this.element);
  }

  public render () {
    const { children, ...remainingProps } = this.props;

    return (
      <pre {...remainingProps} ref={this.highlightBlock}>
        {children}
      </pre>
    );
  }
}
