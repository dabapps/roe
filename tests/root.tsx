import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AppRoot from '../src/ts/components/app/root';
import store from '../src/ts/store';

jest.mock('../src/ts/store', () => {
  const unsubscribe = jest.fn();
  const subscribe = jest.fn().mockReturnValue(unsubscribe);
  const getState = jest.fn().mockReturnValue({});

  return {
    default: {
      getState,
      subscribe,
      unsubscribe,
    }
  };
});

describe('AppRoot', () => {

  beforeEach(() => {
    (store.subscribe as jest.Mock<any>).mockClear();
    ((store as any).unsubscribe as jest.Mock<any>).mockClear();
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
    (store.getState as jest.Mock<any>).mockReturnValue({
      hasFixedNavBar: true,
      hasStickyFooter: true,
    });

    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply padding for fixed nav bar and sticky footer', () => {
    (store.getState as jest.Mock<any>).mockReturnValue({
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
    expect((store as any).unsubscribe).not.toHaveBeenCalled();

    const instance = enzyme.mount(<AppRoot />);

    expect(store.subscribe).toHaveBeenCalled();
    expect((store as any).unsubscribe).not.toHaveBeenCalled();

    instance.unmount();

    expect(store.subscribe).toHaveBeenCalledTimes(1);
    expect((store as any).unsubscribe).toHaveBeenCalledTimes(1);
  });

});
