import * as enzyme from 'enzyme';
import * as React from 'react';
import store from '../src/ts/store';

describe('store', () => {

  describe('connect', () => {

    const unsubscribe = jest.fn();

    beforeAll(() => {
      jest.spyOn(store, 'subscribe').mockReturnValue(unsubscribe);
    });

    const TestComponent = store.connect(() => (
      <p>
        Hello, World!
      </p>
    ));

    let instance: enzyme.ReactWrapper;

    it('should subscribe on mount', () => {
      instance = enzyme.mount(<TestComponent />);

      expect(store.subscribe).toHaveBeenCalledTimes(1);
      expect(unsubscribe).not.toHaveBeenCalled();
    });

    it('should unsubscribe on unmount', () => {
      instance.unmount();

      expect(unsubscribe).toHaveBeenCalledTimes(1);
    });

  });

});
