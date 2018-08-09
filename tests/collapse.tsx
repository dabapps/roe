import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Collapse } from '../src/ts/';

describe('Collapse', () => {

  const createNodeMock = () => ({
    scrollHeight: 500
  });

  it('should match snapshot when collapsed', () => {
    const tree = renderer.create(
      <Collapse open={false} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when expanded', () => {
    const tree = renderer.create(
      <Collapse open />,
      {createNodeMock}
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with custom collapsed height', () => {
    const tree = renderer.create(
      <Collapse open={false} maxCollapsedHeight={100} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with custom min height', () => {
    const tree = renderer.create(
      <Collapse open={false} minHeight={100} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with custom animation duration', () => {
    const tree = renderer.create(
      <Collapse open={false} animationDuration={100} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with fade out', () => {
    const tree = renderer.create(
      <Collapse open={false} fadeOut />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with customized fade out', () => {
    const tree = renderer.create(
      <Collapse open={false} fadeOut fadeColor="red" fadeHeight={10} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Collapse open={false} className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should open from default height', () => {
    jest.useFakeTimers();

    const instance = enzyme.mount(<Collapse open={false} fadeOut />);
    const node = instance.getDOMNode();

    // Set a scrollHeight
    Object.defineProperty(node, 'scrollHeight', {
      get: () => 500
    });

    // Initial state
    instance.update();
    expect(instance).toMatchSnapshot();

    instance.setProps({
      open: true
    });

    // Prepare to open
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Begin open sequence
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Complete open sequence
    instance.update();
    expect(instance).toMatchSnapshot();
  });

  it('should open from custom height', () => {
    jest.useFakeTimers();

    const instance = enzyme.mount(<Collapse open={false} maxCollapsedHeight={100} fadeOut />);
    const node = instance.getDOMNode();

    // Set a scrollHeight
    Object.defineProperty(node, 'scrollHeight', {
      get: () => 500
    });

    // Initial state
    instance.update();
    expect(instance).toMatchSnapshot();

    instance.setProps({
      open: true
    });

    // Prepare to open
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Begin open sequence
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Complete open sequence
    instance.update();
    expect(instance).toMatchSnapshot();
  });

  it('should close to default height', () => {
    jest.useFakeTimers();

    const instance = enzyme.mount(<Collapse open={true} fadeOut />);
    const node = instance.getDOMNode();

    // Set a scrollHeight
    Object.defineProperty(node, 'scrollHeight', {
      get: () => 500
    });

    // Initial state
    instance.update();
    expect(instance).toMatchSnapshot();

    instance.setProps({
      open: false
    });

    // Prepare to close
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Begin close sequence
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Complete close sequence
    instance.update();
    expect(instance).toMatchSnapshot();
  });

  it('should close to custom height', () => {
    jest.useFakeTimers();

    const instance = enzyme.mount(<Collapse open={true} maxCollapsedHeight={100} fadeOut />);
    const node = instance.getDOMNode();

    // Set a scrollHeight
    Object.defineProperty(node, 'scrollHeight', {
      get: () => 500
    });

    // Initial state
    instance.update();
    expect(instance).toMatchSnapshot();

    instance.setProps({
      open: false
    });

    // Prepare to close
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Begin close sequence
    instance.update();
    expect(instance).toMatchSnapshot();

    jest.runOnlyPendingTimers();

    // Complete close sequence
    instance.update();
    expect(instance).toMatchSnapshot();
  });

});
