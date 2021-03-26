import * as React from 'react';

/**
 * @internal
 */
export type StoreState = Partial<{
  hasFixedNavBar: boolean;
  hasStickyFooter: boolean;
  navBarHeight: number;
  footerHeight: number;
}>;

export type StoreListener = (state: StoreState) => void;

export class Store {
  private state: StoreState = {};
  private listeners: StoreListener[] = [];

  public constructor(initialState: StoreState = {}) {
    this.state = initialState;
  }

  public setState = (state: StoreState): void => {
    this.state = {
      ...this.state,
      ...state,
    };

    this.listeners.forEach(listener => {
      listener({ ...this.state });
    });
  };

  public getState = (): StoreState => {
    return { ...this.state };
  };

  public subscribe = (listener: StoreListener): (() => void) => {
    if (this.listeners.indexOf(listener) < 0) {
      this.listeners.push(listener);
    }

    return this.createUnsubscriber(listener);
  };

  private createUnsubscriber = (listener: StoreListener) => () => {
    const index = this.listeners.indexOf(listener);

    if (index >= 0) {
      this.listeners.splice(index, 1);
    }
  };

  public useState = (): StoreState => {
    const [state, setState] = React.useState(this.getState());

    React.useEffect(() => {
      const unsubscribe = this.subscribe(setState);

      return unsubscribe;
    }, []);

    return state;
  };
}

export default new Store();
