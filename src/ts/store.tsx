import * as React from 'react';

export type ComponentType<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;

export type StoreState = Partial<{
  hasFixedNavBar: boolean;
  hasStickyFooter: boolean;
  navBarHeight: number;
  footerHeight: number;
}>;

export type StoreListener = (state: StoreState) => any;

export class Store {
  private state: StoreState = {};
  private listeners: StoreListener[] = [];

  public constructor(initialState: StoreState = {}) {
    this.state = initialState;
  }

  public setState = (state: StoreState) => {
    // for (const key in state) {
    //   /* istanbul ignore else */
    //   if (Object.prototype.hasOwnProperty.call(state, key)) {
    //     const stateKey = key as keyof StoreState;
    //     this.state[stateKey] = state[stateKey] as StoreState[stateKey];
    //   }
    // }
    this.state = {
      ...this.state,
      ...state,
    };

    this.listeners.forEach(listener => {
      listener({ ...this.state });
    });
  };

  public getState = () => {
    return { ...this.state };
  };

  public subscribe = (listener: StoreListener) => {
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
}

export default new Store();
