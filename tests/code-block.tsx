import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';

import { CodeBlock } from '../src/ts';

const mockHighlightBlock = jest.fn();

describe('CodeBlock', () => {
  beforeEach(() => {
    if (!window.hljs) {
      window.hljs = {
        highlightBlock: mockHighlightBlock,
      };
    }
  });

  afterEach(() => {
    mockHighlightBlock.mockReset();
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

    const mount = () => enzyme.mount(<CodeBlock>{children}</CodeBlock>);

    expect(mount).not.toThrow();
  });

  it('should highlight its contents', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = enzyme.mount(<CodeBlock>{children}</CodeBlock>);

    expect(instance).toMatchSnapshot();
  });

  it('should highlight its contents on update', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = enzyme.mount(<CodeBlock>{children}</CodeBlock>);

    expect(instance).toMatchSnapshot();

    instance.setProps({ children: '<div>Goodbye, World!</div>' });

    expect(instance).toMatchSnapshot();
  });
});
