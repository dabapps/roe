import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Tab, Tabs } from '../src/ts';

describe('Tabs', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Tabs>
        <Tab>
          <a>Tab 1</a>
        </Tab>
        <Tab>
          <a>Tab 2</a>
        </Tab>
        <Tab>
          <a>Tab 3</a>
        </Tab>
      </Tabs>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<Tabs className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});

describe('Tab', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(<Tab className="my-class" />);

    expect(tree).toMatchSnapshot();
  });

  it('should add an active class', () => {
    const tree = renderer.create(<Tab active className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
