const mockUseState = jest.fn().mockImplementation(input => [input, jest.fn()]);
const mockUseEffect = jest.fn();

jest.mock('react', () => ({
  useState: mockUseState,
  useEffect: mockUseEffect,
}));

import { Store } from '../src/ts/store';

describe('store', () => {
  beforeEach(() => {
    mockUseState.mockClear();
    mockUseEffect.mockClear();
  });

  describe('Store', () => {
    it('should accept an initial state', () => {
      const testStore = new Store({
        footerHeight: 50,
      });

      expect(testStore.getState()).toEqual({ footerHeight: 50 });
    });

    it('should accept a single instance of each listener, and notify them on setState', () => {
      const listener = jest.fn();

      const testStore = new Store();
      testStore.subscribe(listener);
      testStore.subscribe(listener);

      testStore.setState({ hasFixedNavBar: true });
      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith({ hasFixedNavBar: true });
    });

    it('should return an unsubscriber that removes listeners', () => {
      const listener = jest.fn();

      const testStore = new Store();
      const unsubscribe = testStore.subscribe(listener);

      testStore.setState({ hasFixedNavBar: true });
      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith({ hasFixedNavBar: true });

      unsubscribe();

      testStore.setState({ hasFixedNavBar: true });
      expect(listener).toHaveBeenCalledTimes(1);

      expect(unsubscribe).not.toThrow();
    });

    describe('useState', () => {
      const testStore = new Store({ hasFixedNavBar: true });

      it("should return the store's state", () => {
        expect(testStore.useState()).toEqual({ hasFixedNavBar: true });
      });

      it('should subscribe on mount and unsubscribe on unmount', () => {
        testStore.useState();

        expect(testStore['listeners'].length).toBe(0);

        expect(mockUseEffect).toHaveBeenCalledTimes(1);
        expect(mockUseEffect).toHaveBeenCalledWith(expect.any(Function), []);

        const [effectAdd] = mockUseEffect.mock.calls[0];

        const effectRemove = effectAdd();

        expect(testStore['listeners'].length).toBe(1);

        effectRemove();

        expect(testStore['listeners'].length).toBe(0);
      });
    });
  });
});
