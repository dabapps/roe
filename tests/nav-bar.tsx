import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NavBar from '../src/ts/components/navigation/nav-bar';
import * as utils from '../src/ts/utils';

describe('NavBar', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <NavBar />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <NavBar className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply fixed class', () => {
    const tree = renderer.create(
      <NavBar fixed />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply shy class', () => {
    const tree = renderer.create(
      <NavBar shy />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply no shadow class', () => {
    const tree = renderer.create(
      <NavBar noShadow />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply the hidden class', () => {
    const instance = enzyme.mount(<NavBar shy />);

    instance.setState({hidden: true});
    instance.update();

    expect(instance).toMatchSnapshot();
  });

  it('should toggle shy listeners and update the body class on mount and props change', () => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
    jest.spyOn(utils, 'addClassName').mockImplementation(jest.fn());
    jest.spyOn(utils, 'removeClassName').mockImplementation(jest.fn());

    const instance = enzyme.mount(<NavBar />);

    expect(window.removeEventListener).toHaveBeenCalledTimes(2);
    (window.removeEventListener as jest.Mock<any>).mockClear();
    expect(utils.removeClassName).toHaveBeenCalledTimes(1);
    (utils.removeClassName as jest.Mock<any>).mockClear();

    instance.setProps({shy: true});

    expect(window.addEventListener).toHaveBeenCalledTimes(2);
    (window.addEventListener as jest.Mock<any>).mockClear();
    expect(utils.addClassName).toHaveBeenCalledTimes(1);
    (utils.addClassName as jest.Mock<any>).mockClear();

    instance.setProps({shy: false});

    expect(window.removeEventListener).toHaveBeenCalledTimes(2);
    (window.removeEventListener as jest.Mock<any>).mockClear();
    expect(utils.removeClassName).toHaveBeenCalledTimes(1);
    (utils.removeClassName as jest.Mock<any>).mockClear();
  });

  it('should remove listeners on unmount', () => {
    jest.spyOn(window, 'removeEventListener');

    const instance = enzyme.mount(<NavBar />);

    (window.removeEventListener as jest.Mock<any>).mockClear();

    instance.unmount();

    expect(window.removeEventListener).toHaveBeenCalledTimes(2);
  });

});
