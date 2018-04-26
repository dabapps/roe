import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Slider } from '../src/ts/components/slider';

describe('Slider', () => {
  beforeAll(() => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
  });

  it('should match snapshot', () => {
    const instance = renderer.create(
      <Slider
        onSlide={jest.fn()}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should match snapshot with props (min, max, initialValue)', () => {
    const instance = renderer.create(
      <Slider
        initialValue={0.3}
        min={0.2}
        max={0.8}
        onSlide={jest.fn()}
        onChange={jest.fn()}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should return max if initialValue is greater than max value for single slider', () => {
    const instance = renderer.create(
      <Slider
        initialValue={0.9}
        max={0.8}
        onSlide={jest.fn()}
        onChange={jest.fn()}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should match snapshot with props (popover, range, initialFrom, initialTo)', () => {
    const instance = renderer.create(
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

    expect(instance).toMatchSnapshot();
  });

  it('should match snapshot with props (range, stepped, steps)', () => {
    const instance = renderer.create(
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

    expect(instance).toMatchSnapshot();
  });

  it('should return min and max values for ranged slider - initialFrom less than min, initialTo greater than max', () => {
    const instance = renderer.create(
      <Slider
        className="margin-top-large margin-bottom-large"
        initialFrom={0.1}
        initialTo={0.9}
        min={0.125}
        max={0.75}
        onSlide={jest.fn()}
        range
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should return min and max values for ranged slider - initialFrom greater than max, initialTo less than min', () => {
    const instance = renderer.create(
      <Slider
        className="margin-top-large margin-bottom-large"
        initialFrom={0.9}
        initialTo={0.1}
        min={0.125}
        max={0.75}
        onSlide={jest.fn()}
        range
      />
    );

    expect(instance).toMatchSnapshot();
  });

  // it('should ', () => {
  //   const instance = enzyme.mount(
  //     <Slider
  //       initialFrom={0}
  //       initialTo={0.5}
  //       min={0}
  //       max={0.5}
  //       stepped
  //       steps={8}
  //       onSlide={jest.fn()}
  //       range
  //     />
  //   );

  //   instance.find('.roe-handle')
  //     .first().simulate('mouseDown', { clientX: 0, clientY: 0 })

  //   const mouseMove = new MouseEvent('mousemove', { clientX: 4000, clientY: 0 });
  //   const mouseUp = new MouseEvent('mouseup', { clientX: 4000, clientY: 0 });

  //   mouseMove.initEvent('mousemove', true, true);
  //   mouseUp.initEvent('mouseup', true, true);

  //   document.dispatchEvent(mouseMove);
  //   document.dispatchEvent(mouseUp);

  //   instance.unmount();
  // });

  it('should match snapshot with props (orientation="vertical")', () => {
    const instance = renderer.create(
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

    expect(instance).toMatchSnapshot();
  });

  it('should call mouse events on single slider', () => {
    const instance = enzyme.mount(
      <Slider
        onChange={jest.fn()}
        onSlide={jest.fn()}
      />
    );

    instance.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');

    instance.unmount();
  });

  it('should call mouse events on single slider (vertical)', () => {
    const instance = enzyme.mount(
      <Slider
        onChange={jest.fn()}
        onSlide={jest.fn()}
        orientation="vertical"
      />
    );

    instance.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 0, clientY: 100 })
      .simulate('mouseUp');

    instance.unmount();
  });

  it('should call mouse events on stepped single slider', () => {
    const instance = enzyme.mount(
      <Slider
        stepped
        onSlide={jest.fn()}
      />
    );

    instance.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 500, clientY: 0 })
      .simulate('mouseUp');

    instance.unmount();
  });

  it('should call mouse events on single range slider', () => {
    const instance = enzyme.mount(
      <Slider
        range
        onSlide={jest.fn()}
      />
    );

    instance.find('.roe-handle__range')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');

    instance.unmount();
  });

  it('should call mouse events on range stepped slider (first slide exceeded range position)', () => {
    const instance = enzyme.mount(
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

    instance.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 0 })

    instance.find('.roe-handle__range')
      .first().simulate('mouseDown', { clientX: 100, clientY: 0 })

    const mouseMove = new MouseEvent('mousemove', { clientX: 400, clientY: 0 });
    const mouseUp = new MouseEvent('mouseup', { clientX: 300, clientY: 0 });

    mouseMove.initEvent('mousemove', true, true);
    mouseUp.initEvent('mouseup', true, true);

    document.dispatchEvent(mouseMove);
    document.dispatchEvent(mouseUp);

    instance.unmount();
  });

  it('should call mouse events on range stepped slider (vertical)', () => {
    const instance = enzyme.mount(
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

    instance.find('.roe-handle')
      .first().simulate('mouseDown', { clientX: 0, clientY: 500 })
      .simulate('mouseMove', { clientX: 0, clientY: 600 })
      .simulate('mouseUp');

    instance.find('.roe-handle__range')
      .first().simulate('mouseDown', { clientX: 0, clientY: 750 })
      .simulate('mouseMove', { clientX: 0, clientY: 100 })
      .simulate('mouseUp');

    instance.unmount();
  });


  it('should remove listeners on unmount', () => {

    const instance = enzyme.shallow(
      <Slider
        onSlide={jest.fn()}
      />);

    instance.unmount();
  });

  it('should avoid mouse right click', () => {

    const instance = enzyme.mount(
      <Slider
        onSlide={jest.fn()}
      />);

    instance.find('.roe-handle')
      .first().simulate('mouseDown', { button: 2 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');

    instance.unmount();
  });

  it('should call onChange on mouseup for single slider', () => {

    const onSlide = jest.fn();
    const onChange = jest.fn();

    const instance = enzyme.mount(
      <Slider
        onSlide={onSlide}
        onChange={onChange}
      />
    );

    const handle = instance
      .find('.roe-handle')
      .first();

    handle
      .simulate('mousedown', { clientX: 0, clientY: 0 });

    const mouseMove = new MouseEvent('mousemove', { clientX: 100, clientY: 0 });
    const mouseUp = new MouseEvent('mouseup', { clientX: 100, clientY: 0 });

    mouseMove.initEvent('mousemove', true, true);
    mouseUp.initEvent('mouseup', true, true);

    document.dispatchEvent(mouseMove);
    document.dispatchEvent(mouseUp);

    expect(onChange).toHaveBeenCalled();

    instance.unmount();
  });

  it('should call (onChangeFrom, onChangeTo) on mouseup for ranged slider', () => {

    const onSlide = jest.fn();
    const onChangeFrom = jest.fn();
    const onChangeTo = jest.fn();

    const instance = enzyme.mount(
      <Slider
        onSlide={onSlide}
        initialFrom={0}
        initialTo={0}
        onChangeFrom={onChangeFrom}
        onChangeTo={onChangeTo}
        range
      />
    );

    const handle = instance
      .find('.roe-handle')
      .first();

    handle
      .simulate('mousedown', { clientX: 0, clientY: 0 });

    const handleRange = instance
      .find('.roe-handle__range')
      .first();

    handle
      .simulate('mousedown', { clientX: 0, clientY: 0 });

    handleRange
      .simulate('mousedown', { clientX: 0, clientY: 0 });

    const mouseMove = new MouseEvent('mousemove', { clientX: 100, clientY: 0 });
    const mouseUp = new MouseEvent('mouseup', { clientX: 100, clientY: 0 });

    mouseMove.initEvent('mousemove', true, true);
    mouseUp.initEvent('mouseup', true, true);

    document.dispatchEvent(mouseMove);
    document.dispatchEvent(mouseUp);

    expect(onChangeFrom).toHaveBeenCalled();
    expect(onChangeTo).toHaveBeenCalled();

    instance.unmount();
  });

});
