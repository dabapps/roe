import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Button } from '../src/ts/';

describe('Button', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Button />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take an optional large prop', () => {
    const tree = renderer.create(
      <Button large />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Button className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should use a type prop as a class name', () => {
    const tree = renderer.create(
      <Button type="primary" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should use a block prop (boolean) as a class name', () => {
    const tree = renderer.create(
      <Button block />
    );

    expect(tree).toMatchSnapshot();
  });

});
