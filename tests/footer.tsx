import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '../src/ts/components/navigation/footer';
import store from '../src/ts/store';

jest.mock('react-dom', () => ({
  findDOMNode: () => null,
}));

jest.mock('../src/ts/store', () => ({
  default: {
    setState: jest.fn(),
  }
}));

describe('Footer', () => {

  beforeAll(() => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
  });

  beforeEach(() => {
    (store.setState as jest.Mock<any>).mockClear();
    (window.addEventListener as jest.Mock<any>).mockImplementation(jest.fn()).mockClear();
    (window.removeEventListener as jest.Mock<any>).mockImplementation(jest.fn()).mockClear();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Footer />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Footer className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply sticky class', () => {
    const tree = renderer.create(
      <Footer sticky />
    );

    expect(tree).toMatchSnapshot();
  });

});
