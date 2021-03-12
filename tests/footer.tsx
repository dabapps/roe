import * as enzyme from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { Footer } from '../src/ts';
import store from '../src/ts/store';
import {
  mockConstructor,
  mockDisconnect,
  mockObserve,
} from './__mocks__/@juggle/resize-observer';

const mockElement = document.createElement('div');

const mockFindDOMNode = jest.fn();
const mockSetState = jest.fn();

jest.mock('react-dom', () => ({
  findDOMNode: mockFindDOMNode,
}));

jest.mock('../src/ts/store', () => ({
  default: {
    setState: mockSetState,
  },
}));

jest.mock('@juggle/resize-observer');

describe('Footer', () => {
  beforeEach(() => {
    mockConstructor.mockClear();
    mockDisconnect.mockClear();
    mockObserve.mockClear();

    mockFindDOMNode.mockImplementation(() => mockElement);

    mockSetState.mockClear();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Footer />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Footer className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  describe('sticky', () => {
    it('should apply sticky class', () => {
      const tree = renderer.create(<Footer sticky />);

      expect(tree).toMatchSnapshot();
    });

    it('should not observe the element when no element is found', () => {
      mockFindDOMNode.mockReturnValue(null);

      enzyme.mount(<Footer fixed />);

      expect(mockObserve).toHaveBeenCalledTimes(0);
    });

    it('should toggle sticky listeners and update the app root on mount and props change', () => {
      const instance = enzyme.mount(<Footer />);

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
      mockDisconnect.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ sticky: false });

      expect(mockDisconnect).toHaveBeenCalledTimes(0);
      mockDisconnect.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      mockSetState.mockClear();

      instance.setProps({ sticky: true });

      expect(mockObserve).toHaveBeenCalledTimes(1);
      mockObserve.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ sticky: false });

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
      mockDisconnect.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();
    });

    it('should remove listeners on unmount', () => {
      const instance = enzyme.mount(<Footer />);

      mockDisconnect.mockClear();

      instance.unmount();

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should update the app root when the element is resized', () => {
      const instance = enzyme.mount(<Footer sticky />).instance();

      expect(mockObserve).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledWith(instance['updateAppRoot']);

      mockSetState.mockClear();

      instance['updateAppRoot']();

      expect(store.setState).toHaveBeenCalledTimes(1);
    });

    it("should notify about the element's height", () => {
      const fakeElement = document.createElement('div');
      fakeElement.getBoundingClientRect = () => ({
        height: 20,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        top: 0,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const findDOMNodeSpy = jest
        .spyOn(ReactDOM, 'findDOMNode')
        .mockReturnValue(fakeElement);

      const instance = enzyme.mount(<Footer sticky />).instance();

      expect(mockObserve).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledWith(instance['updateAppRoot']);

      mockSetState.mockClear();

      instance['updateAppRoot']();

      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 20,
      });

      findDOMNodeSpy.mockReset();
    });
  });

  describe('fixed', () => {
    it('should apply fixed class', () => {
      const tree = renderer.create(<Footer fixed />);

      expect(tree).toMatchSnapshot();
    });

    it('should toggle fixed listeners and update the app root on mount and props change', () => {
      const instance = enzyme.mount(<Footer />);

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
      mockDisconnect.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ fixed: false });

      expect(mockDisconnect).toHaveBeenCalledTimes(0);
      mockDisconnect.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      mockSetState.mockClear();

      instance.setProps({ fixed: true });

      expect(mockObserve).toHaveBeenCalledTimes(1);
      mockObserve.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ fixed: false });

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
      mockDisconnect.mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();
    });

    it('should remove listeners on unmount', () => {
      const instance = enzyme.mount(<Footer />);

      mockDisconnect.mockClear();

      instance.unmount();

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should update the app root when the element is resized', () => {
      const instance = enzyme.mount(<Footer fixed />).instance();

      expect(mockObserve).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledWith(instance['updateAppRoot']);

      mockSetState.mockClear();

      instance['updateAppRoot']();

      expect(store.setState).toHaveBeenCalledTimes(1);
    });

    it("should notify about the element's height", () => {
      const fakeElement = document.createElement('div');
      fakeElement.getBoundingClientRect = () => ({
        height: 20,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        top: 0,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const findDOMNodeSpy = jest
        .spyOn(ReactDOM, 'findDOMNode')
        .mockReturnValue(fakeElement);

      const instance = enzyme.mount(<Footer fixed />).instance();

      expect(mockObserve).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledTimes(1);
      expect(mockConstructor).toHaveBeenCalledWith(instance['updateAppRoot']);

      mockSetState.mockClear();

      instance['updateAppRoot']();

      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 20,
      });

      findDOMNodeSpy.mockReset();
    });
  });
});
