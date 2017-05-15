import * as hljs from 'highlight.js';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { CodeBlock } from '../src/ts/';

describe('CodeBlock', () => {

  const highlightBlockSpy = jest.spyOn(hljs, 'highlightBlock').mockImplementation(jest.fn);

  afterEach(() => {
    highlightBlockSpy.mockReset();
  })

  it('should match snapshot', () => {
    const tree = renderer.create(
      <CodeBlock />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional language prop', () => {
    const tree = renderer.create(
      <CodeBlock language="javascript" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should handle empty code snippets', () => {
    const tree = renderer.create(
      <CodeBlock language="javascript">
        {''}
      </CodeBlock>
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
    let tree = renderer.create(
      <CodeBlock>
        {`console.log('test')`}
      </CodeBlock>
    );

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

  it('should highlight its contents', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = new CodeBlock({children});
    const element = document.createElement('pre');

    expect(hljs.highlightBlock).not.toHaveBeenCalled();

    instance.highlightBlock(element);

    expect(hljs.highlightBlock).toHaveBeenCalledWith(element);
  });

  it('should highlight its contens on update', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = new CodeBlock({children});
    const element = document.createElement('pre');

      // tslint:disable-next-line
    expect(hljs.highlightBlock).not.toHaveBeenCalled()

    instance.element = element;

    instance.componentDidUpdate({children});

      // tslint:disable-next-line
    expect(hljs.highlightBlock).not.toHaveBeenCalled()

    instance.componentDidUpdate({children: 'Different children'});

    expect(hljs.highlightBlock).toHaveBeenCalledWith(element);
  });

});
