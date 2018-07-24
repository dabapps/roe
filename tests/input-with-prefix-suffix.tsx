import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { InputWithPrefixSuffix } from '../src/ts/components/precomposed/input-with-prefix-suffix';

describe('InputWithPrefixSuffix', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<InputWithPrefixSuffix />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply class names to appropriate elements', () => {
    const tree = renderer.create(
      <InputWithPrefixSuffix
        prefix="£"
        suffix="%"
        className="group"
        inputClassName="input"
        prefixClassName="prefix"
        suffixClassName="suffix"
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should add the "block" class name if this prop is true', () => {
    const tree = renderer.create(
      <InputWithPrefixSuffix prefix="£" suffix="%" block />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should pass props to the input', () => {
    const tree = renderer.create(
      <InputWithPrefixSuffix prefix="£" suffix="%" value="Value" />
    );

    expect(tree).toMatchSnapshot();
  });
});
