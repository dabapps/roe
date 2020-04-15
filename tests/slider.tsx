import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Slider } from '../src/ts/';

const props = {
  onChange: jest.fn(),
  min: 10,
  max: 333,
  initialValue: {
    from: 10,
    to: 333,
  },
  step: 5,
};

describe('Slider', () => {
  beforeAll(() => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return { width: 100, height: 10, top: 0, left: 0, bottom: 0, right: 0 };
    });
  });

  beforeEach(() => {
    props.onChange.mockClear();
  });

  it('should match snapshot', () => {
    const instance = renderer.create(<Slider {...props} />);

    expect(instance).toMatchSnapshot();
  });

  it('should call mouse events on range stepped slider (first slide exceeded range position)', () => {
    const instance = enzyme.mount(<Slider {...props} />);

    instance
      .find('.control')
      .first()
      .simulate('mouseDown', { clientX: 20, clientY: 0 })
      .simulate('mouseup');

    instance
      .find('.control')
      .last()
      .simulate('mouseDown', { clientX: 80, clientY: 0 })
      .simulate('mouseup');

    const mouseMove = new MouseEvent('mousemove', { clientX: 20, clientY: 0 });
    const mouseUp = new MouseEvent('mouseup', { clientX: 80, clientY: 0 });

    mouseMove.initEvent('mousemove', true, true);
    mouseUp.initEvent('mouseup', true, true);

    document.dispatchEvent(mouseMove);
    document.dispatchEvent(mouseUp);

    instance.unmount();
    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenCalledWith({ from: 75, to: 75 });
    expect(props.onChange).toHaveBeenCalledWith({ from: 75, to: 270 });
  });

  it('should call touch events on range stepped slider (first slide exceeded range position)', () => {
    const instance = enzyme.mount(<Slider {...props} />);

    instance
      .find('.control')
      .first()
      .simulate('touchmove', { targetTouches: [{ clientX: 10 }] })
      .simulate('touchend');

    instance
      .find('.control')
      .last()
      .simulate('touchmove', { targetTouches: [{ clientX: 10 }] })
      .simulate('touchend');

    const touchMove = new TouchEvent('touchmove', {
      targetTouches: [{ clientX: 400 } as Touch],
    });
    const touchEnd = new TouchEvent('touchend', { targetTouches: [] });

    touchMove.initEvent('touchmove', true, true);
    touchEnd.initEvent('touchend', true, true);

    document.dispatchEvent(touchMove);
    document.dispatchEvent(touchEnd);

    instance.unmount();
    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenCalledWith({ from: 40, to: 333 });
    expect(props.onChange).toHaveBeenCalledWith({ from: 40, to: 333 });
  });

  it('should remove listeners on unmount', () => {
    const instance = enzyme.shallow(<Slider {...props} />);

    instance.unmount();
  });

  it('should avoid mouse right click', () => {
    const instance = enzyme.mount(<Slider {...props} />);

    instance
      .find('.control')
      .first()
      .simulate('mouseDown', { button: 2 })
      .simulate('mouseMove', { clientX: 100, clientY: 0 })
      .simulate('mouseUp');

    instance.unmount();
    expect(props.onChange).not.toHaveBeenCalled();
  });
});
