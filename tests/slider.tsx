import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Slider } from '../src/ts/components/slider';

describe('Slider', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Slider
        onSlide={jest.fn()}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (min, max, initialValue)', () => {
    const tree = renderer.create(
      <Slider
        initialValue={0.3}
        min={0.2}
        max={0.8}
        onSlide={jest.fn()}
        onChange={jest.fn()}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (popover, range, initialFrom, initialTo)', () => {
    const tree = renderer.create(
      <Slider
        initialFrom={0.25}
        initialTo={0.88}
        onSlide={jest.fn()}
        onChangeFrom={jest.fn()}
        onChangeTo={jest.fn()}
        popover
        range
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (range, stepped, steps)', () => {
    const tree = renderer.create(
      <Slider
        className="margin-top-large margin-bottom-large"
        initialFrom={0.25}
        initialTo={0.5}
        min={0.125}
        max={0.75}
        onSlide={jest.fn()}
        onSlideFrom={jest.fn()}
        onChangeFrom={jest.fn()}
        onSlideTo={jest.fn()}
        onChangeTo={jest.fn()}
        popover
        range
        stepped
        steps={8}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with props (orientation="vertical")', () => {
    const tree = renderer.create(
      <Slider
        min={0.25}
        max={0.75}
        popover
        stepped
        steps={4}
        onSlide={jest.fn()}
        onChange={jest.fn()}
        orientation="vertical"
      />
    );

    expect(tree).toMatchSnapshot();
  });

});
