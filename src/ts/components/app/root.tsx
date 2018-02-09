import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import store, { StoreState } from '../../store';

export type AppRootProps = HTMLProps<HTMLElement> & StoreState;

/**
 * This is the most important part of your app.
 * This component interacts with other Roe components to adjust styles at the root level.
 * Your app must have an AppRoot if you wish to used a fixed NavBar or Footer.
 */
export class AppRoot extends PureComponent<AppRootProps, {}> {
  public render () {
    const {
      children,
      ...remainingProps,
    } = this.props;

    return (
      <div {...remainingProps}>
        {children}
      </div>
    );
  }
}

export default store.connect(AppRoot);
