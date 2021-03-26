import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as testUtils from 'react-dom/test-utils';

const mockSetState = jest.fn();

jest.mock('../src/ts/store', () => ({
  default: {
    setState: mockSetState,
  },
}));

import { NavBar } from '../src/ts';
import store from '../src/ts/store';
import * as utils from '../src/ts/utils';
import {
  mockConstructor,
  mockDisconnect,
  mockObserve,
} from './__mocks__/@juggle/resize-observer';

jest.mock('@juggle/resize-observer');

const setTime = (time: number) => {
  jest.spyOn(Date.prototype, 'getTime').mockReturnValue(time);
};

describe('NavBar', () => {
  const mockAddEventListener = jest.fn();
  const mockRemoveEventListener = jest.fn();

  beforeAll(() => {
    jest
      .spyOn(window, 'addEventListener')
      .mockImplementation(mockAddEventListener);
    jest
      .spyOn(window, 'removeEventListener')
      .mockImplementation(mockRemoveEventListener);
  });

  beforeEach(() => {
    mockConstructor.mockClear();
    mockDisconnect.mockClear();
    mockObserve.mockClear();
    mockSetState.mockClear();
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<NavBar />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<NavBar className="my-class" />);

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

  it('should apply the hidden class once scrolled', () => {
    const mockGetScrollOffset = jest.fn().mockReturnValue({ x: 0, y: 0 });
    jest
      .spyOn(utils, 'getScrollOffset')
      .mockImplementation(mockGetScrollOffset);
    setTime(0);

    const instance = enzyme.mount(<NavBar shy />);

    expect(instance).toMatchSnapshot();

    const [[, lastScrollListener]] = [...mockAddEventListener.mock.calls]
      .reverse()
      .filter(([event]) => event === 'scroll');

    setTime(500);
    mockGetScrollOffset.mockReturnValue({ x: 0, y: 1000 });
    testUtils.act(() => lastScrollListener());

    instance.update();
    expect(instance).toMatchSnapshot();
  });

  it('should toggle shy listeners and update the app root on mount and props change', () => {
    const instance = enzyme.mount(<NavBar />);

    const removedScrollCount = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'scroll'
    ).length;
    const removedResizeCount = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'resize'
    ).length;

    expect(mockDisconnect).toHaveBeenCalledTimes(0);
    // Once on mount, once after update, once on DOM ref
    expect(removedScrollCount).toBe(3);
    expect(removedResizeCount).toBe(3);
    // Once on mount, once on update
    expect(store.setState).toHaveBeenCalledTimes(2);
    expect(store.setState).toHaveBeenCalledWith({
      hasFixedNavBar: false,
      navBarHeight: 0,
    });
    mockRemoveEventListener.mockClear();
    mockDisconnect.mockClear();
    mockSetState.mockClear();

    instance.setProps({ shy: false });

    const removedScrollCount2 = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'scroll'
    ).length;
    const removedResizeCount2 = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'resize'
    ).length;

    expect(mockDisconnect).toHaveBeenCalledTimes(0);
    // Once on update, once after update
    expect(removedScrollCount2).toBe(2);
    expect(removedResizeCount2).toBe(2);
    expect(store.setState).toHaveBeenCalledTimes(1);
    mockDisconnect.mockClear();
    mockRemoveEventListener.mockClear();
    mockSetState.mockClear();

    instance.setProps({ shy: true });

    const addScrollCount = mockAddEventListener.mock.calls.filter(
      ([event]) => event === 'scroll'
    ).length;
    const addResizeCount = mockAddEventListener.mock.calls.filter(
      ([event]) => event === 'resize'
    ).length;

    expect(mockObserve).toHaveBeenCalledTimes(1);
    // Once now that we're shy
    expect(addScrollCount).toBe(1);
    expect(addResizeCount).toBe(1);
    // Once on update, once on observe
    expect(store.setState).toHaveBeenCalledTimes(2);
    expect(store.setState).toHaveBeenCalledWith({
      hasFixedNavBar: true,
      navBarHeight: 0,
    });
    mockObserve.mockClear();
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
    mockSetState.mockClear();

    instance.setProps({ shy: false });

    const removedScrollCount3 = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'scroll'
    ).length;
    const removedResizeCount3 = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'resize'
    ).length;

    // Once on update (no longer shy), once after previous update
    expect(mockDisconnect).toHaveBeenCalledTimes(2);
    // Once on update, once after previous update
    expect(removedScrollCount3).toBe(2);
    expect(removedResizeCount3).toBe(2);
    expect(store.setState).toHaveBeenCalledTimes(1);
    expect(store.setState).toHaveBeenCalledWith({
      hasFixedNavBar: false,
      navBarHeight: 0,
    });
  });

  it('should remove listeners on unmount', () => {
    const instance = enzyme.mount(<NavBar shy />);

    mockDisconnect.mockClear();
    mockRemoveEventListener.mockClear();

    instance.unmount();

    const removedScrollCount = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'scroll'
    ).length;
    const removedResizeCount = mockRemoveEventListener.mock.calls.filter(
      ([event]) => event === 'resize'
    ).length;

    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(removedScrollCount).toBe(1);
    expect(removedResizeCount).toBe(1);
  });

  it('should hide or show the navbar when scrolled', () => {
    const mockGetScrollOffset = jest.fn().mockReturnValue({ x: 0, y: 0 });
    jest
      .spyOn(utils, 'getScrollOffset')
      .mockImplementation(mockGetScrollOffset);
    setTime(0);

    const handlers = {
      scroll: jest.fn(),
    };

    mockAddEventListener.mockImplementation(
      (type: string, callback: () => void) => {
        if (type === 'scroll') {
          handlers[type].mockImplementation(() => {
            testUtils.act(() => callback());
          });
        }
      }
    );

    const instance = enzyme.mount(<NavBar shy />);

    const { scroll } = handlers;

    if (!scroll) {
      throw new Error('No scroll listener attached');
    }

    // Initial position (not hidden)
    scroll();
    instance.update();
    expect(instance).toMatchSnapshot();

    mockGetScrollOffset.mockReturnValue({ x: 0, y: 10 });

    // Scrolled a little, but not farther than the NavBar height (not hidden)
    scroll();
    instance.update();
    expect(instance).toMatchSnapshot();

    mockGetScrollOffset.mockReturnValue({ x: 0, y: 50 });

    // Scrolled, but too soon after initial mount (not hidden)
    scroll();
    instance.update();
    expect(instance).toMatchSnapshot();

    setTime(500);

    mockGetScrollOffset.mockReturnValue({ x: 0, y: 100 });

    // Scrolled past NavBar height (hidden)
    scroll();
    instance.update();
    expect(instance).toMatchSnapshot();

    mockGetScrollOffset.mockReturnValue({ x: 0, y: 95 });

    // Not scrolled far enough (not hidden)
    scroll();
    instance.update();
    expect(instance).toMatchSnapshot();

    mockGetScrollOffset.mockReturnValue({ x: 0, y: 40 });

    // Scrolled up (not hidden)
    scroll();
    instance.update();
    expect(instance).toMatchSnapshot();
  });
});
