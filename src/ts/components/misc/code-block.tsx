interface IHighlightJS {
  highlightBlock(element: HTMLElement): void;
}

declare const hljs: void | IHighlightJS;

import * as classNames from 'classnames';
import * as React from 'react';

import {
  FunctionComponentOptionalComponentProp,
  OptionalComponentProp,
} from '../../types';
import { formatCode, memoWithComponentProp } from '../../utils';

export interface CodeBlockProps {
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
export const CodeBlock: FunctionComponentOptionalComponentProp<
  'div',
  CodeBlockProps
> = (props: OptionalComponentProp<'div'> & CodeBlockProps) => {
  const {
    children,
    className,
    language,
    codeBlockName,
    component: Component = 'div',
    ...remainingProps
  } = props;
  const languageClassName = language && `language-${language}`;
  const elementRef = React.useRef<HTMLPreElement>(null);
  const prevProps = React.useRef(props);

  const content =
    typeof children === 'string' ? formatCode(children) : children;

  React.useEffect(() => {
    if (
      elementRef.current &&
      typeof hljs === 'object' &&
      // tslint:disable-next-line:strict-type-predicates
      typeof hljs.highlightBlock === 'function' &&
      prevProps.current.children !== props.children
    ) {
      hljs.highlightBlock(elementRef.current);
    }

    prevProps.current = props;
  }, [props]);

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
        ref={elementRef}
        className={classNames('code-block', languageClassName)}
      >
        {content}
      </pre>
    </Component>
  );
};

export default memoWithComponentProp(CodeBlock);
