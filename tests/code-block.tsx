import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { CodeBlock } from '../src/ts/';

describe('CodeBlock', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <CodeBlock />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take an optional language prop', () => {
    const tree = renderer.create(
      <CodeBlock language="javascript" />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take remove weird indentation from children', () => {
    // Correct indentation
    let tree = renderer.create(
      <CodeBlock>
{`<p>
  Hello, World!
</p>`}
      </CodeBlock>
    );

    expect(tree).to.matchSnapshot();

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

    expect(tree).to.matchSnapshot();
  });

  it('should highlight its contents', () => {
    const children = `
      <p>
        Hello, World!
      </p>
    `;

    const instance = new CodeBlock({children, language: 'javascript'});
    instance.element = document.createElement('pre');

    instance.highlightBlock(instance.element);
  });

});
