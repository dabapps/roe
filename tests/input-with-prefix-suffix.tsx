import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { InputWithPrefixSuffix } from '../src/ts/components/forms/input-with-prefix-suffix';

describe('InputWithPrefixSuffix', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <InputWithPrefixSuffix value="" onChange={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with all props', () => {
    const tree = renderer.create(
      <InputWithPrefixSuffix
        prefix="£"
        suffix="%"
        value=""
        onChange={jest.fn()}
        type="text"
        disabled={false}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
