interface IHighlightJS {
  highlightBlock(element: HTMLElement): void;
}

declare const hljs: void | IHighlightJS;

import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';

import { ComponentProps } from '../../types';
import { formatCode } from '../../utils';

export interface CodeBlockProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Code to display.
   */
  children?: string;
  /**
   * Language of the code to display e.g. "javascript".
   */
  language?: string;
  /**
   * Name of the code block e.g. "index.js".
   */
  codeBlockName?: string;
}

/**
 * Component to nicely highlight code inside a `pre` element.
 */
export class CodeBlock extends PureComponent<CodeBlockProps, {}> {
  public element: HTMLPreElement;

  public constructor(props: CodeBlockProps) {
    super(props);

    this.highlightBlock = this.highlightBlock.bind(this);
  }

  public highlightBlock(element: HTMLPreElement) {
    this.element = element;

    // tslint:disable-next-line:strict-type-predicates
    if (typeof hljs === 'object' && typeof hljs.highlightBlock === 'function') {
      hljs.highlightBlock(this.element);
    }
  }

  public componentDidUpdate(prevProps: CodeBlockProps) {
    if (
      typeof hljs === 'object' &&
      // tslint:disable-next-line:strict-type-predicates
      typeof hljs.highlightBlock === 'function' &&
      prevProps.children !== this.props.children
    ) {
      hljs.highlightBlock(this.element);
    }
  }

  public render() {
    const {
      children,
      className,
      language,
      codeBlockName,
      component: Component = 'div' as any,
      ...remainingProps
    } = this.props;
    const languageClassName = language && `language-${language}`;

    const content =
      typeof children === 'string' ? formatCode(children) : children;

    return (
      <Component
        {...remainingProps}
        className={classNames('code-block-wrapper', className)}
      >
        {typeof codeBlockName !== 'undefined' && (
          <div className="code-block-name">
            {typeof language !== 'undefined' && (
              <div className="code-block-language">{language}</div>
            )}
            {codeBlockName}
          </div>
        )}
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

export default CodeBlock;
