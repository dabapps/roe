import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { CodeBlock } from '../src/ts';

interface IHighlightJS {
  highlightBlock: jest.Mock<any>;
}

// tslint:disable:no-namespace
declare global {
  // tslint:disable:interface-name
  interface Window {
    hljs: void | IHighlightJS;
  }
}

describe('CodeBlock', () => {
  beforeEach(() => {
    if (!window.hljs) {
      window.hljs = {
        highlightBlock: jest.fn(),
      };
    }
  });

  afterEach(() => {
    if (window.hljs) {
      window.hljs.highlightBlock.mockReset();
    }
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<CodeBlock />);

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional language prop', () => {
    const tree = renderer.create(<CodeBlock language="javascript" />);

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional codeBlockName prop', () => {
    const tree = renderer.create(
      <CodeBlock codeBlockName="example" language="javascript" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should handle empty code snippets', () => {
    const tree = renderer.create(
      <CodeBlock language="javascript">{''}</CodeBlock>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should remove weird indentation from multi line snippets', () => {
    // Correct indentation
    let tree = renderer.create(
      <CodeBlock>
        {`<p>
  Hello, World!
</p>`}
      </CodeBlock>
    );

    expect(tree).toMatchSnapshot();

    // Incorrect indentation (should match above snapshot after processing)
    tree = renderer.create(
      <CodeBlock>
        {`

          <p>
            Hello, World!
          </p>


           `}
      </CodeBlock>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should remove weird indentation from single line snippets', () => {
    // Correct indentation
    let tree = renderer.create(<CodeBlock>{`console.log('test')`}</CodeBlock>);

    expect(tree).toMatchSnapshot();

    // Incorrect indentation (should match above snapshot after processing)
    tree = renderer.create(
      <CodeBlock>
        {`
          console.log('test')
        `}
      </CodeBlock>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should handle missing global hljs', () => {
    window.hljs = undefined;

    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = new CodeBlock({ children });
    const element = document.createElement('pre');

    instance.highlightBlock(element);
    instance.componentDidUpdate({ children });
    instance.componentDidUpdate({ children: 'Different children' });
  });

  it('should highlight its contents', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = new CodeBlock({ children });
    const element = document.createElement('pre');

    expect(window.hljs && window.hljs.highlightBlock).not.toHaveBeenCalled();

    instance.highlightBlock(element);

    expect(window.hljs && window.hljs.highlightBlock).toHaveBeenCalledWith(
      element
    );
  });

  it('should highlight its contents on update', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = new CodeBlock({ children });
    const element = document.createElement('pre');

    expect(window.hljs && window.hljs.highlightBlock).not.toHaveBeenCalled();

    instance.element = element;

    instance.componentDidUpdate({ children });

    expect(window.hljs && window.hljs.highlightBlock).not.toHaveBeenCalled();

    instance.componentDidUpdate({ children: 'Different children' });

    expect(window.hljs && window.hljs.highlightBlock).toHaveBeenCalledWith(
      element
    );
  });
});
