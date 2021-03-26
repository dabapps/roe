export const mockConstructor = jest.fn();

export const mockObserve = jest.fn();
export const mockUnobserve = jest.fn();
export const mockDisconnect = jest.fn();

class MockResizeObserver {
  private callback: () => void;
  public observe = (): void => {
    this.callback();
    mockObserve();
  };
  public unobserve = mockUnobserve;
  public disconnect = mockDisconnect;
  public constructor(callback: () => void) {
    this.callback = callback;
    mockConstructor(callback);
  }
}

export { MockResizeObserver as ResizeObserver };
