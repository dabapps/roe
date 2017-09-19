import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as index from '../src/ts/';

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

describe('index file', () => {

  beforeEach(() => {
    if (!window.hljs) {
      window.hljs = {
        highlightBlock: jest.fn()
      };
    }
  });

  it('should export some components', () => {
    const keys = Object.keys(index);

    expect(keys.length).toBeGreaterThan(0);
  });

  describe('components', () => {

    it('should all accept a component prop', () => {
      type Keys = keyof typeof index;

      for (const key in index) {
        if (index.hasOwnProperty(key)) {
          const Component = index[key as Keys];

          expect(renderer.create(<Component component="p" />).toJSON().type).toBe('p');
        }
      }
    });

  });

});
