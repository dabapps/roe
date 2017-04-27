import * as classNames from 'classnames';
import * as React from 'react';
import * as hljs from 'highlight.js';

const MATCHES_INITIAL_INDENTATION = /^([^\n\S]*)\S/gm;
const MATCHES_BLANK_FIRST_LINE = /^\s*\n/;
const MATCHES_BLANK_LAST_LINE = /\n\s*$/;

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

    const initialIndentation: RegExpExecArray | null =
      typeof children === 'string' ? MATCHES_INITIAL_INDENTATION.exec(children) : null;

    const content = typeof children === 'string' && initialIndentation ?
      children
        .replace(MATCHES_BLANK_FIRST_LINE, '')
        .replace(MATCHES_BLANK_LAST_LINE, '')
        .replace(new RegExp(initialIndentation[1], 'g'), '') :
      children;

    return (
      <pre {...remainingProps} ref={this.highlightBlock}>
        {content}
      </pre>
    );
  }
}
