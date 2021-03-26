import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

const mockSetState = jest.fn();

jest.mock('../src/ts/store', () => ({
  default: {
    setState: mockSetState,
  },
}));

import { Footer } from '../src/ts';
import store from '../src/ts/store';
import {
  mockConstructor,
  mockDisconnect,
  mockObserve,
} from './__mocks__/@juggle/resize-observer';

jest.mock('@juggle/resize-observer');

describe('Footer', () => {
  beforeEach(() => {
    mockConstructor.mockClear();
    mockDisconnect.mockClear();
    mockObserve.mockClear();
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

    it('should toggle sticky listeners and update the app root on mount and props change', () => {
      const instance = enzyme.mount(<Footer />);

      expect(mockDisconnect).toHaveBeenCalledTimes(0);
      // Once on initial mount, and once after we get a DOM ref
      expect(store.setState).toHaveBeenCalledTimes(2);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ sticky: false });

      expect(mockDisconnect).toHaveBeenCalledTimes(0);
      // Once on update
      expect(store.setState).toHaveBeenCalledTimes(1);
      mockSetState.mockClear();

      instance.setProps({ sticky: true });

      expect(mockObserve).toHaveBeenCalledTimes(1);
      // Once on update, and once after observe
      expect(store.setState).toHaveBeenCalledTimes(2);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 0,
      });
      mockObserve.mockClear();
      mockSetState.mockClear();

      instance.setProps({ sticky: false });

      // Once to unregister, and once because we're no longer sticky
      expect(mockDisconnect).toHaveBeenCalledTimes(2);
      // Once on update
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
    });

    it('should remove listeners on unmount', () => {
      const instance = enzyme.mount(<Footer sticky />);

      mockDisconnect.mockClear();

      instance.unmount();

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });
  });

  describe('fixed', () => {
    it('should apply fixed class', () => {
      const tree = renderer.create(<Footer fixed />);

      expect(tree).toMatchSnapshot();
    });

    it('should toggle fixed listeners and update the app root on mount and props change', () => {
      const instance = enzyme.mount(<Footer />);

      expect(mockDisconnect).toHaveBeenCalledTimes(0);
      // Once on mount, once after DOM ref
      expect(store.setState).toHaveBeenCalledTimes(2);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ fixed: false });

      expect(mockDisconnect).toHaveBeenCalledTimes(0);
      // Once on update
      expect(store.setState).toHaveBeenCalledTimes(1);
      mockSetState.mockClear();

      instance.setProps({ fixed: true });

      expect(mockObserve).toHaveBeenCalledTimes(1);
      mockObserve.mockClear();
      // Once on update, once after observe
      expect(store.setState).toHaveBeenCalledTimes(2);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 0,
      });
      mockSetState.mockClear();

      instance.setProps({ fixed: false });

      // Once on update, once after fixed removed
      expect(mockDisconnect).toHaveBeenCalledTimes(2);
      mockDisconnect.mockClear();
      // Once on update
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: 0,
      });
      mockSetState.mockClear();
    });

    it('should remove listeners on unmount', () => {
      const instance = enzyme.mount(<Footer fixed />);

      mockDisconnect.mockClear();

      instance.unmount();

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });
  });
});
