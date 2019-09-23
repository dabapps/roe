import * as enzyme from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { NavBar } from '../src/ts/';
import store from '../src/ts/store';
import * as utils from '../src/ts/utils';

jest.mock('react-dom', () => ({
  findDOMNode: () => null,
}));

jest.mock('../src/ts/store', () => ({
  default: {
    setState: jest.fn(),
  },
}));

const setTime = (time: number) => {
  jest.spyOn(Date.prototype, 'getTime').mockReturnValue(time);
};

describe('NavBar', () => {
  beforeAll(() => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
  });

  beforeEach(() => {
    (store.setState as jest.Mock<any>).mockClear();
    (window.addEventListener as jest.Mock<any>)
      .mockImplementation(jest.fn())
      .mockClear();
    (window.removeEventListener as jest.Mock<any>)
      .mockImplementation(jest.fn())
      .mockClear();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<NavBar />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<NavBar dark className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply fixed class', () => {
    const tree = renderer.create(<NavBar fixed />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply shy class', () => {
    const tree = renderer.create(<NavBar shy />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply no shadow class', () => {
    const tree = renderer.create(<NavBar noShadow />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply the dark class', () => {
    const tree = renderer.create(<NavBar dark />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply the hidden class', () => {
    const instance = enzyme.mount(<NavBar shy />);

    instance.setState({ hidden: true });
    instance.update();

    expect(instance).toMatchSnapshot();
  });

  it('should toggle shy listeners and update the app root on mount and props change', () => {
    const instance = enzyme.mount(<NavBar />);

    expect(window.removeEventListener).toHaveBeenCalledTimes(3);
    (window.removeEventListener as jest.Mock<any>).mockClear();
    expect(store.setState).toHaveBeenCalledTimes(1);
    expect(store.setState).toHaveBeenCalledWith({
      hasFixedNavBar: false,
      navBarHeight: undefined,
    });
    (store.setState as jest.Mock<any>).mockClear();

    instance.setProps({ shy: false });

    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
    (window.removeEventListener as jest.Mock<any>).mockClear();
    expect(store.setState).toHaveBeenCalledTimes(0);
    (store.setState as jest.Mock<any>).mockClear();

    instance.setProps({ shy: true });

    expect(window.addEventListener).toHaveBeenCalledTimes(3);
    (window.addEventListener as jest.Mock<any>).mockClear();
    expect(store.setState).toHaveBeenCalledTimes(1);
    expect(store.setState).toHaveBeenCalledWith({
      hasFixedNavBar: true,
      navBarHeight: undefined,
    });
    (store.setState as jest.Mock<any>).mockClear();

    instance.setProps({ shy: false });

    expect(window.removeEventListener).toHaveBeenCalledTimes(3);
    (window.removeEventListener as jest.Mock<any>).mockClear();
    expect(store.setState).toHaveBeenCalledTimes(1);
    expect(store.setState).toHaveBeenCalledWith({
      hasFixedNavBar: false,
      navBarHeight: undefined,
    });
    (store.setState as jest.Mock<any>).mockClear();
  });

  it('should remove listeners on unmount', () => {
    const instance = enzyme.mount(<NavBar />);

    (window.removeEventListener as jest.Mock<any>).mockClear();

    instance.unmount();

    expect(window.removeEventListener).toHaveBeenCalledTimes(3);
  });

  it('should update the app root when the window is resized', () => {
    const handlers: { [i: string]: (() => any) | undefined } = {};

    (window.addEventListener as jest.Mock<any>).mockImplementation(
      (type: string, callback: () => any) => {
        if (type === 'resize') {
          handlers[type] = callback;
          jest.spyOn(handlers, type);
        }
      }
    );

    enzyme.mount(<NavBar fixed />);

    expect(window.addEventListener).toHaveBeenCalledTimes(1);

    (store.setState as jest.Mock<any>).mockClear();

    const { resize } = handlers;

    if (resize) {
      resize();
    }

    expect(store.setState).toHaveBeenCalledTimes(1);
  });

  it('should hide or show the navbar when scrolled', () => {
    setTime(0);

    const handlers: { [i: string]: (() => any) | undefined } = {};

    (window.addEventListener as jest.Mock<any>).mockImplementation(
      (type: string, callback: () => any) => {
        if (type === 'scroll') {
          handlers[type] = callback;
          jest.spyOn(handlers, type);
        }
      }
    );
    jest.spyOn(utils, 'getScrollOffset').mockReturnValue({ x: 0, y: 0 });

    const fakeElement = document.createElement('div');
    fakeElement.getBoundingClientRect = () => ({
      height: 20,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      top: 0,
    });

    jest.spyOn(ReactDOM, 'findDOMNode').mockReturnValue(fakeElement);

    const instance = enzyme.mount(<NavBar shy />);

    const { scroll } = handlers;

    if (!scroll) {
      throw new Error('No scroll listener attached');
    }

    // Initial position
    scroll();
    expect(instance.state('hidden')).toBe(false);

    (utils.getScrollOffset as jest.Mock<any>).mockReturnValue({ x: 0, y: 10 });

    // Scrolled a little, but not farther than the NavBar height
    scroll();
    expect(instance.state('hidden')).toBe(false);

    (utils.getScrollOffset as jest.Mock<any>).mockReturnValue({ x: 0, y: 50 });

    // Scrolled, but too soon after initial mount
    scroll();
    expect(instance.state('hidden')).toBe(false);

    setTime(500);

    (utils.getScrollOffset as jest.Mock<any>).mockReturnValue({ x: 0, y: 100 });

    // Scrolled past NavBar height
    scroll();
    expect(instance.state('hidden')).toBe(true);

    (utils.getScrollOffset as jest.Mock<any>).mockReturnValue({ x: 0, y: 95 });

    // Not scrolled far enough
    scroll();
    expect(instance.state('hidden')).toBe(true);

    (utils.getScrollOffset as jest.Mock<any>).mockReturnValue({ x: 0, y: 40 });

    // Scrolled up
    scroll();
    expect(instance.state('hidden')).toBe(false);
  });

  it('should gracefully handle a missing element', () => {
    const handlers: { [i: string]: (() => any) | undefined } = {};

    (window.addEventListener as jest.Mock<any>).mockImplementation(
      (type: string, callback: () => any) => {
        if (type === 'scroll') {
          handlers[type] = callback;
          jest.spyOn(handlers, type);
        }
      }
    );
    jest.spyOn(ReactDOM, 'findDOMNode').mockReturnValue(null);

    enzyme.mount(<NavBar shy />);

    const { scroll } = handlers;

    if (!scroll) {
      throw new Error('No scroll listener attached');
    }

    expect(scroll).not.toThrow();

    setTime(1000);

    expect(scroll).not.toThrow();
  });
});
