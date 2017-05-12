import * as classNames from 'classnames';
import * as hljs from 'highlight.js';
import * as React from 'react';

const MATCHES_INITIAL_INDENTATION = /^([^\S\n]*)\S/;
const MATCHES_BLANK_FIRST_LINE = /^\s*\n/;
const MATCHES_BLANK_LAST_LINE = /\n\s*$/;

export interface IProps extends React.HTMLProps<HTMLPreElement> {
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

    hljs.highlightBlock(this.element);
  }

  public componentDidUpdate (prevProps: IProps) {
    if (prevProps.children !== this.props.children) {
      hljs.highlightBlock(this.element);
    }
  }

  public formatCode (code: string) {
    const codeWithoutLeadingOrTrailingEmptyLines = code
      .replace(MATCHES_BLANK_FIRST_LINE, '')
      .replace(MATCHES_BLANK_LAST_LINE, '');

    const initialIndentation: RegExpExecArray | null =
      MATCHES_INITIAL_INDENTATION.exec(codeWithoutLeadingOrTrailingEmptyLines);

    return initialIndentation ?
      codeWithoutLeadingOrTrailingEmptyLines.replace(new RegExp(`^${initialIndentation[1]}`, 'gm'), '') :
      codeWithoutLeadingOrTrailingEmptyLines;
  }

  public render () {
    const { children, className, language, ...remainingProps } = this.props;
    const languageClassName = language && `language-${language}`;

    const content = typeof children === 'string' ? this.formatCode(children) : children;

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
