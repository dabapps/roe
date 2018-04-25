import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Slider } from '../src/ts/components/slider';

describe('Slider', () => {
  beforeAll(() => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
  });

  beforeEach(() => {
    (window.addEventListener as jest.Mock<any>)
      .mockImplementation(jest.fn())
      .mockClear();
    (window.removeEventListener as jest.Mock<any>)
      .mockImplementation(jest.fn())
      .mockClear();
  });

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

  it('should call mouse events on single slider', () => {
    const tree = enzyme.mount(
      <Slider
        onChange={jest.fn()}
        onSlide={jest.fn()}
      />
    );

    tree.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');
  });

  it('should call mouse events on single slider (vertical)', () => {
    const tree = enzyme.mount(
      <Slider
        onChange={jest.fn()}
        onSlide={jest.fn()}
        orientation="vertical"
      />
    );

    tree.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 0, clientY: 100 })
      .simulate('mouseUp');
  });

  it('should call mouse events on stepped single slider', () => {
    const tree = enzyme.mount(
      <Slider
        stepped
        steps={6}
        onSlide={jest.fn()}
      />
    );

    tree.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');
  });

  it('should call mouse events on single range slider', () => {
    const tree = enzyme.mount(
      <Slider
        range
        onSlide={jest.fn()}
      />
    );

    tree.find('.roe-handle__range')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');
  });

  it('should call mouse events on range stepped slider (first slide exceeded range position)', () => {
    const tree = enzyme.mount(
      <Slider
        initialFrom={0.25}
        initialTo={0.5}
        min={0.125}
        max={0.75}
        range
        stepped
        steps={8}
        popover
        onSlide={jest.fn()}
        onSlideFrom={jest.fn()}
        onChangeFrom={jest.fn()}
        onSlideTo={jest.fn()}
        onChangeTo={jest.fn()}
      />
    );

    tree.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 400, clientY: 0 })
      .simulate('mouseUp');

    tree.find('.roe-handle__range')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 300, clientY: 0 })
      .simulate('mouseUp');
  });

  it('should call mouse events on range stepped slider (vertical)', () => {
    const tree = enzyme.mount(
      <Slider
        initialFrom={0.5}
        initialTo={0.75}
        min={0.125}
        max={0.75}
        range
        stepped
        steps={8}
        popover
        onSlide={jest.fn()}
        onSlideFrom={jest.fn()}
        onChangeFrom={jest.fn()}
        onSlideTo={jest.fn()}
        onChangeTo={jest.fn()}
        orientation="vertical"
      />
    );

    tree.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 500 })
      .simulate('mouseMove', { clientX: 0, clientY: 600 })
      .simulate('mouseUp');

    tree.find('.roe-handle__range')
      .first().simulate('mouseDown', { clientX: 0, clientY: 750 })
      .simulate('mouseMove', { clientX: 0, clientY: 100 })
      .simulate('mouseUp');
  });


  it('should remove listeners on unmount', () => {

    const wrapper = enzyme.shallow(
      <Slider
        onSlide={jest.fn()}
      />);

    wrapper.unmount();
  });

});
