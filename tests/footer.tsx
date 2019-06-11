import * as enzyme from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { Footer } from '../src/ts/';
import store from '../src/ts/store';

jest.mock('react-dom', () => ({
  findDOMNode: () => null,
}));

jest.mock('../src/ts/store', () => ({
  default: {
    setState: jest.fn(),
  },
}));

describe('Footer', () => {
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

      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
      (window.removeEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: undefined,
      });
      (store.setState as jest.Mock<any>).mockClear();

      instance.setProps({ sticky: false });

      expect(window.removeEventListener).toHaveBeenCalledTimes(0);
      (window.removeEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(0);
      (store.setState as jest.Mock<any>).mockClear();

      instance.setProps({ sticky: true });

      expect(window.addEventListener).toHaveBeenCalledTimes(1);
      (window.addEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: undefined,
      });
      (store.setState as jest.Mock<any>).mockClear();

      instance.setProps({ sticky: false });

      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
      (window.removeEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: undefined,
      });
      (store.setState as jest.Mock<any>).mockClear();
    });

    it('should remove listeners on unmount', () => {
      const instance = enzyme.mount(<Footer />);

      (window.removeEventListener as jest.Mock<any>).mockClear();

      instance.unmount();

      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
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

      enzyme.mount(<Footer sticky />);

      expect(window.addEventListener).toHaveBeenCalledTimes(1);

      (store.setState as jest.Mock<any>).mockClear();

      const { resize } = handlers;

      if (resize) {
        resize();
      }

      expect(store.setState).toHaveBeenCalledTimes(1);
    });

    it("should notify about the element's height", () => {
      const handlers: { [i: string]: (() => any) | undefined } = {};

      (window.addEventListener as jest.Mock<any>).mockImplementation(
        (type: string, callback: () => any) => {
          if (type === 'resize') {
            handlers[type] = callback;
            jest.spyOn(handlers, type);
          }
        }
      );

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

      enzyme.mount(<Footer sticky />);

      expect(window.addEventListener).toHaveBeenCalledTimes(1);

      (store.setState as jest.Mock<any>).mockClear();

      const { resize } = handlers;

      if (resize) {
        resize();
      }

      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 20,
      });
    });
  });

  describe('fixed', () => {
    it('should apply fixed class', () => {
      const tree = renderer.create(<Footer fixed />);

      expect(tree).toMatchSnapshot();
    });

    it('should toggle fixed listeners and update the app root on mount and props change', () => {
      const instance = enzyme.mount(<Footer />);

      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
      (window.removeEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: undefined,
      });
      (store.setState as jest.Mock<any>).mockClear();

      instance.setProps({ fixed: false });

      expect(window.removeEventListener).toHaveBeenCalledTimes(0);
      (window.removeEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(0);
      (store.setState as jest.Mock<any>).mockClear();

      instance.setProps({ fixed: true });

      expect(window.addEventListener).toHaveBeenCalledTimes(1);
      (window.addEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: undefined,
      });
      (store.setState as jest.Mock<any>).mockClear();

      instance.setProps({ fixed: false });

      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
      (window.removeEventListener as jest.Mock<any>).mockClear();
      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: false,
        footerHeight: undefined,
      });
      (store.setState as jest.Mock<any>).mockClear();
    });

    it('should remove listeners on unmount', () => {
      const instance = enzyme.mount(<Footer />);

      (window.removeEventListener as jest.Mock<any>).mockClear();

      instance.unmount();

      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
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

      enzyme.mount(<Footer fixed />);

      expect(window.addEventListener).toHaveBeenCalledTimes(1);

      (store.setState as jest.Mock<any>).mockClear();

      const { resize } = handlers;

      if (resize) {
        resize();
      }

      expect(store.setState).toHaveBeenCalledTimes(1);
    });

    it("should notify about the element's height", () => {
      const handlers: { [i: string]: (() => any) | undefined } = {};

      (window.addEventListener as jest.Mock<any>).mockImplementation(
        (type: string, callback: () => any) => {
          if (type === 'resize') {
            handlers[type] = callback;
            jest.spyOn(handlers, type);
          }
        }
      );

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

      enzyme.mount(<Footer fixed />);

      expect(window.addEventListener).toHaveBeenCalledTimes(1);

      (store.setState as jest.Mock<any>).mockClear();

      const { resize } = handlers;

      if (resize) {
        resize();
      }

      expect(store.setState).toHaveBeenCalledTimes(1);
      expect(store.setState).toHaveBeenCalledWith({
        hasStickyFooter: true,
        footerHeight: 20,
      });
    });
  });
});
