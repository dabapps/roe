import * as React from 'react';
import * as renderer from 'react-test-renderer';

const mockUnsubscribe = jest.fn();
const mockSubscribe = jest.fn().mockReturnValue(mockUnsubscribe);
const mockGetState = jest.fn().mockReturnValue({});
const mockUseState = jest.fn().mockReturnValue({});

jest.mock('../src/ts/store', () => ({
  default: {
    getState: mockGetState,
    subscribe: mockSubscribe,
    unsubscribe: mockUnsubscribe,
    useState: mockUseState,
  },
}));

import { AppRoot } from '../src/ts';

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
    mockUseState.mockReturnValue({
      hasFixedNavBar: true,
      hasStickyFooter: true,
    });

    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply padding for fixed nav bar and sticky footer', () => {
    mockUseState.mockReturnValue({
      hasFixedNavBar: true,
      hasStickyFooter: true,
      navBarHeight: 50,
      footerHeight: 100,
    });

    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });
});
