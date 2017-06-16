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

  it('should take an optional small prop', () => {
    const tree = renderer.create(
      <Button small />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should use a block prop (boolean) as a class name', () => {
    const tree = renderer.create(
      <Button block />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Button className="my-class" type="submit" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take multiple class names', () => {
    const tree = renderer.create(
      <Button className="primary float-right" />
    );

    expect(tree).toMatchSnapshot();
  });

});
