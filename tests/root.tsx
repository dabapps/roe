import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AppRoot, { AppRootUnconnected } from '../src/ts/components/app/root';

describe('AppRoot', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(<AppRoot />);

    expect(tree).toMatchSnapshot();
  });

  it('should accept regular element attributes', () => {
    const tree = renderer.create(<AppRoot className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply classes for fixed nav bar and sticky footer', () => {
    const tree = renderer.create(<AppRootUnconnected hasFixedNavBar hasStickyFooter />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply padding for fixed nav bar and sticky footer', () => {
    const tree = renderer.create(
      <AppRootUnconnected
        hasFixedNavBar
        hasStickyFooter
        navBarHeight={50}
        footerHeight={100}
      />
    );

    expect(tree).toMatchSnapshot();
  });

});
