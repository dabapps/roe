import { Store } from '../src/ts/store';

describe('store', () => {

  describe('Store', () => {

    it('should accept an initial state', () => {
      const testStore = new Store({
        footerHeight: 50,
      });

      expect(testStore.getState()).toEqual({footerHeight: 50});
    });

    it('should accept a single instance of each listener, and notify them on setState', () => {
      const listener = jest.fn();

      const testStore = new Store();
      testStore.subscribe(listener);
      testStore.subscribe(listener);

      testStore.setState({hasFixedNavBar: true});
      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith({hasFixedNavBar: true});
    });

    it('should return an unsubscriber that removes listeners', () => {
      const listener = jest.fn();

      const testStore = new Store();
      const unsubscribe = testStore.subscribe(listener);

      testStore.setState({hasFixedNavBar: true});
      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith({hasFixedNavBar: true});

      unsubscribe();

      testStore.setState({hasFixedNavBar: true});
      expect(listener).toHaveBeenCalledTimes(1);

      expect(unsubscribe).not.toThrow();
    });

  });

});
