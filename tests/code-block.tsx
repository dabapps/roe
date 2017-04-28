import { expect } from 'chai';
import * as hljs from 'highlight.js';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { stub } from 'sinon';

import { CodeBlock } from '../src/ts/';

describe('CodeBlock', () => {

  let highlightBlockStub: sinon.SinonStub;

  beforeEach(() => {
    highlightBlockStub = stub(hljs, 'highlightBlock');
  });

  afterEach(() => {
    highlightBlockStub.restore();
  })

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

  it('should remove weird indentation from multi line snippets', () => {
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

  it('should remove weird indentation from single line snippets', () => {
    // Correct indentation
    let tree = renderer.create(
      <CodeBlock>
        {`console.log('test')`}
      </CodeBlock>
    );

    expect(tree).to.matchSnapshot();

    // Incorrect indentation (should match above snapshot after processing)
    tree = renderer.create(
      <CodeBlock>
        {`
          console.log('test')
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

    const instance = new CodeBlock({children});
    const element = document.createElement('pre');

    // tslint:disable-next-line
    expect(highlightBlockStub).not.to.have.been.called;

    instance.highlightBlock(element);

    expect(highlightBlockStub).to.have.been.calledWith(element);
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
    expect(highlightBlockStub).not.to.have.been.called;

    instance.element = element;

    instance.componentDidUpdate({children});

      // tslint:disable-next-line
    expect(highlightBlockStub).not.to.have.been.called;

    instance.componentDidUpdate({children: 'Different children'});

    expect(highlightBlockStub).to.have.been.calledWith(element);
  });

});
