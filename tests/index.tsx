import * as React from 'react';
import * as renderer from 'react-test-renderer';

import * as index from '../src/ts';

jest.mock('react-dom', () => ({
  findDOMNode: () => null,
}));

const otherProps = {
  open: false,
  render: () => <div />,
  pageSize: 0,
  currentPageNumber: 1,
  itemCount: 0,
};

describe('index file', () => {
  const mockHighlightBlock = jest.fn();

  beforeEach(() => {
    if (!window.hljs) {
      window.hljs = {
        highlightBlock: mockHighlightBlock,
      };
    }
  });

  it('should export some components', () => {
    const keys = Object.keys(index);

    expect(keys.length).toBeGreaterThan(0);
  });

  describe('components', () => {
    it('should all accept a component prop', () => {
      const exceptions: readonly IndexKey[] = [
        'Anchor',
        'DabIpsum',
        'ModalRenderer',
        'Modal',
        'Table',
        'SideBar',
        'Pagination',
      ];
      type Exceptions =
        | 'Anchor'
        | 'DabIpsum'
        | 'ModalRenderer'
        | 'Modal'
        | 'Table'
        | 'SideBar'
        | 'Pagination';
      type IndexKey = keyof typeof index;
      type IndexKeyWithComponentProp = Exclude<IndexKey, Exceptions>;

      const indexKeys = Object.keys(index) as readonly IndexKey[];

      indexKeys
        .filter(
          (key): key is IndexKeyWithComponentProp => !exceptions.includes(key)
        )
        .forEach(key => {
          // eslint-disable-next-line import/namespace
          const Component = index[key];

          const element = <Component {...otherProps} component="p" />;
          const elementJSON = renderer.create(element).toJSON();

          if (
            !elementJSON ||
            (Array.isArray(elementJSON)
              ? elementJSON[0].type !== 'p'
              : elementJSON.type !== 'p')
          ) {
            throw new Error(`${key} cannot take a component prop. 😥`);
          }
        });
    });

    it('should all be function components', () => {
      type Keys = keyof typeof index;

      for (const key in index) {
        if (Object.prototype.hasOwnProperty.call(index, key)) {
          // eslint-disable-next-line import/namespace
          const Component = index[key as Keys];

          if (Component && Component.prototype instanceof React.PureComponent) {
            throw new Error(
              `${key} extends PureComponent but should be a function component. 😥`
            );
          }
        }
      }
    });
  });
});
