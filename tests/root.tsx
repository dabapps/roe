import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { AppRoot } from '../src/ts';
import store from '../src/ts/store';

const mockUnsubscribe = jest.fn();
const mockSubscribe = jest.fn().mockReturnValue(mockUnsubscribe);
const mockGetState = jest.fn().mockReturnValue({});

jest.mock('../src/ts/store', () => ({
  default: {
    getState: mockGetState,
    subscribe: mockSubscribe,
    unsubscribe: mockUnsubscribe,
  },
}));

describe('AppRoot', () => {
  beforeEach(() => {
    mockSubscribe.mockClear();
    mockUnsubscribe.mockClear();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should accept regular element attributes', () => {
    const tree = renderer.create(<AppRoot className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply classes for fixed nav bar and sticky footer', () => {
    mockGetState.mockReturnValue({
      hasFixedNavBar: true,
      hasStickyFooter: true,
    });

    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply padding for fixed nav bar and sticky footer', () => {
    mockGetState.mockReturnValue({
      hasFixedNavBar: true,
      hasStickyFooter: true,
      navBarHeight: 50,
      footerHeight: 100,
    });

    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should subscribe and unsubscribe from the store on mount and unmount', () => {
    expect(store.subscribe).not.toHaveBeenCalled();
    expect(mockUnsubscribe).not.toHaveBeenCalled();

    const instance = enzyme.mount(<AppRoot />);

    expect(store.subscribe).toHaveBeenCalled();
    expect(mockUnsubscribe).not.toHaveBeenCalled();

    instance.unmount();

    expect(store.subscribe).toHaveBeenCalledTimes(1);
    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });
});
