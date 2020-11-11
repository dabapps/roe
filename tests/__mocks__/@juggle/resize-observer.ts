export const mockConstructor = jest.fn();

export const mockObserve = jest.fn();
export const mockUnobserve = jest.fn();
export const mockDisconnect = jest.fn();

class MockResizeObserver {
  public observe = mockObserve;
  public unobserve = mockUnobserve;
  public disconnect = mockDisconnect;
  public constructor(callback: () => void) {
    mockConstructor(callback);
  }
}

export { MockResizeObserver as ResizeObserver };
