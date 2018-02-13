import * as React from 'react';

export type ComponentType<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

export type StoreState = Partial<{
  hasFixedNavbar: boolean;
  hasFixedFooter: boolean;
  navBarHeight: number;
}>;

export type StoreListener = (state: StoreState) => any;

export const createConnectedComponent = <OwnProps extends {[i: string]: any}>
  (store: Store, component: ComponentType<StoreState & OwnProps>): ComponentType<OwnProps> => {
  const Component = component;

  return class ConnectedComponent extends React.PureComponent<OwnProps, StoreState> {
    private unsubscribe: () => void;
    public constructor (props: OwnProps) {
      super(props);

      this.state = store.getState();
    }

    public componentWillMount () {
      this.unsubscribe = store.subscribe((state) => {
        this.setState(state);
      });
    }

    public componentWillUnmount () {
      this.unsubscribe();
    }

    public render () {
      const {
        children,
        ...remainingProps,
      } = this.props as any;

      return (
        <Component {...this.state} {...remainingProps}>
          {children}
        </Component>
      );
    }
  }
};

// tslint:disable-next-line:max-classes-per-file
export class Store {
  private state: StoreState = {};
  private listeners: StoreListener[] = [];

  public constructor (initialState: StoreState = {}) {
    this.state = initialState;
  }

  public setState = (state: StoreState) => {
    for (const key in state) {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        this.state[key as keyof StoreState] = state[key as keyof StoreState];
      }
    }

    this.listeners.forEach((listener) => {
      listener({...this.state});
    });
  }

  public getState = () => {
    return {...this.state};
  }

  public connect = <OwnProps extends {[i: string]: any}>
  (component: ComponentType<StoreState & OwnProps>): ComponentType<OwnProps> => {
    return createConnectedComponent<OwnProps>(this, component);
  }

  public subscribe = (listener: StoreListener) => {
    if (this.listeners.indexOf(listener) < 0) {
      this.listeners.push(listener);
    }

    return this.createUnsubscriber(listener);
  }

  private createUnsubscriber = (listener: StoreListener) => () => {
    const index = this.listeners.indexOf(listener);

    if (index >= 0) {
      this.listeners.splice(index, 1);
    }
  }
}

export default new Store();
