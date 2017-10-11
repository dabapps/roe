interface IHighlightJS {
  highlightBlock(element: HTMLElement): void;
}

declare const hljs: void | IHighlightJS;

import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

const MATCHES_INITIAL_INDENTATION = /^([^\S\n]*)\S/;
const MATCHES_BLANK_FIRST_LINE = /^\s*\n/;
const MATCHES_BLANK_LAST_LINE = /\n\s*$/;

export interface CodeBlockProps extends HTMLProps<HTMLDivElement> {
  component?: string;
  children?: string;
  language?: string;
}

export function formatCode (code: string) {
    const codeWithoutLeadingOrTrailingEmptyLines = code
      .replace(MATCHES_BLANK_FIRST_LINE, '')
      .replace(MATCHES_BLANK_LAST_LINE, '');

    const initialIndentation: RegExpExecArray | null =
      MATCHES_INITIAL_INDENTATION.exec(codeWithoutLeadingOrTrailingEmptyLines);

    return initialIndentation ?
      codeWithoutLeadingOrTrailingEmptyLines.replace(new RegExp(`^${initialIndentation[1]}`, 'gm'), '') :
      codeWithoutLeadingOrTrailingEmptyLines;
  }

export class CodeBlock extends PureComponent<CodeBlockProps, any> {
  public element: HTMLPreElement;

  public constructor (props: CodeBlockProps) {
    super(props);

    this.highlightBlock = this.highlightBlock.bind(this);
  }

  public highlightBlock (element: HTMLPreElement) {
    this.element = element;

    if (hljs && typeof hljs.highlightBlock === 'function') {
      hljs.highlightBlock(this.element);
    }
  }

  public componentDidUpdate (prevProps: CodeBlockProps) {
    if (
      hljs && typeof hljs.highlightBlock === 'function' &&
      prevProps.children !== this.props.children
    ) {
      hljs.highlightBlock(this.element);
    }
  }

  public render () {
    const { children, className, language, name, component: Component = 'div', ...remainingProps } = this.props;
    const languageClassName = language && `language-${language}`;

    const content = typeof children === 'string' ? formatCode(children) : children;

    return (
      <Component {...remainingProps} className={classNames('code-block-wrapper', className)}>
        {
          typeof name !== 'undefined' && (
            <div className="code-block-name">
              {
                typeof language !== 'undefined' && (
                  <div className="code-block-language">
                    {language}
                  </div>
                )
              }
              {name}
            </div>
          )
        }
        <pre
          ref={this.highlightBlock}
          className={classNames('code-block', languageClassName)}
        >
          {content}
        </pre>
      </Component>
    );
  }
}
