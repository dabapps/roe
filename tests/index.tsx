import * as React from 'react';
import { PureComponent } from 'react';
import * as renderer from 'react-test-renderer';

import * as index from '../src/ts/';

jest.mock('react-dom', () => ({
  findDOMNode: () => null,
}));

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
        highlightBlock: jest.fn(),
      };
    }
  });

  it('should export some components', () => {
    const keys = Object.keys(index);

    expect(keys.length).toBeGreaterThan(0);
  });

  describe('components', () => {
    it('should all accept a component prop', () => {
      const exceptions = [
        'Anchor',
        'DabIpsum',
        'ModalRenderer',
        'Modal',
        'Table',
        'SideBar',
        'Pagination',
      ];
      type Keys = keyof typeof index;

      for (const key in index) {
        if (index.hasOwnProperty(key)) {
          const Component = index[key as Keys];

          if (Component) {
            const instance = <Component component="p" />;

            if (
              exceptions.indexOf(key) < 0 &&
              renderer.create(instance).toJSON().type !== 'p'
            ) {
              throw new Error(`${key} cannot take a component prop. :\'(`);
            }
          }
        }
      }
    });

    it('should all extend PureComponent', () => {
      const exceptions = ['DabIpsum'];

      type Keys = keyof typeof index;

      for (const key in index) {
        if (index.hasOwnProperty(key)) {
          const Component = index[key as Keys];

          if (
            exceptions.indexOf(key) < 0 &&
            Component &&
            !(Component.prototype instanceof PureComponent)
          ) {
            throw new Error(`${key} does not extend PureComponent. :\'(`);
          }
        }
      }
    });
  });
});
