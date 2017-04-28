import * as classNames from 'classnames';
import * as hljs from 'highlight.js';
import * as React from 'react';

const MATCHES_INITIAL_INDENTATION = /^([^\n\S]*)\S/gm;
const MATCHES_BLANK_FIRST_LINE = /^\s*\n/;
const MATCHES_BLANK_LAST_LINE = /\n\s*$/;

interface IProps extends React.HTMLProps<HTMLPreElement> {
  children?: string;
  language?: string;
}

export class CodeBlock extends React.Component<IProps, any> {
  public element: HTMLPreElement;

  public constructor (props: IProps) {
    super(props);

    this.highlightBlock = this.highlightBlock.bind(this);
  }

  public highlightBlock (element: HTMLPreElement) {
    this.element = element;

    if (this.element) {
      hljs.highlightBlock(this.element);
    }
  }

  public componentDidUpdate (prevProps: IProps) {
    if (this.element && prevProps.children !== this.props.children) {
      hljs.highlightBlock(this.element);
    }
  }

  public render () {
    const { children, className, language, ...remainingProps } = this.props;
    const languageClassName = language && `language-${language}`;

    const initialIndentation: RegExpExecArray | null =
      typeof children === 'string' ? MATCHES_INITIAL_INDENTATION.exec(children) : null;

    const content = typeof children === 'string' && initialIndentation ?
      children
        .replace(MATCHES_BLANK_FIRST_LINE, '')
        .replace(MATCHES_BLANK_LAST_LINE, '')
        .replace(new RegExp(initialIndentation[1], 'g'), '') :
      children;

    return (
      <pre
        {...remainingProps}
        ref={this.highlightBlock}
        className={classNames(languageClassName, className)}
      >
        {content}
      </pre>
    );
  }
}
