import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Column } from '../src/ts';

describe('Column', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Column />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Column className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should convert column modifier props to class names', () => {
    const values = [undefined, NaN, 0, 1, 2, 3];
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const modifiers = ['Offset', 'Fill', 'Push', 'Pull'];

    const columns = sizes
      .map(size =>
        modifiers.map(modifier =>
          values.map(value => {
            const props: any = {};
            props[size + modifier] = value;
            return React.createElement(Column, props);
          })
        )
      )
      .concat(
        sizes.map(size =>
          values.map(value => {
            const props: any = {};
            props[size] = value;
            return React.createElement(Column, props);
          })
        )
      );

    const tree = renderer.create(<div>{columns}</div>);

    expect(tree).toMatchSnapshot();
  });
});
