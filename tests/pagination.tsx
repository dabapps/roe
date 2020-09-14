import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Pagination } from '../src/ts';

describe('Pagination', () => {
  it('should render the button for page 1 as selected when the currentPageNumber is 1', () => {
    const instance = renderer.create(
      <Pagination
        className="float-right margin-top-base"
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={1}
        itemCount={26}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should disable buttons when disabled is true', () => {
    const instance = renderer.create(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={1}
        itemCount={26}
        disabled
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should render page 1 as the first option, followed by an ellipse and further pages, when the current page is greater than 3', () => {
    const instance = renderer.create(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={5}
        itemCount={70}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should display less than 5 buttons for minimal page counts', () => {
    const instance = renderer.create(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={1}
        itemCount={6}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should display custom next and previous text', () => {
    const instance = renderer.create(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={1}
        itemCount={6}
        prevText="Prev"
        nextText="Next"
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should add an extra button to cover remainder pages', () => {
    const instance = renderer.create(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={1}
        itemCount={7}
      />
    );

    expect(instance).toMatchSnapshot();
  });

  it('should increment pages on next click', () => {
    const instance = enzyme.shallow(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={1}
        itemCount={7}
      />
    );

    instance.find('.next').simulate('click');
  });

  it('should decrement pages on prev click', () => {
    const instance = enzyme.shallow(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={2}
        itemCount={7}
      />
    );

    instance.find('.prev').simulate('click');
  });

  it('should go the page by clicking the page number', () => {
    const instance = enzyme.mount(
      <Pagination
        pageSize={3}
        changePage={jest.fn()}
        currentPageNumber={2}
        itemCount={7}
      />
    );

    const previousButton = instance
      .find('.spaced-group.pagination-group')
      .childAt(1);

    previousButton.simulate('click');

    expect(instance.instance().props.changePage).toHaveBeenCalledTimes(1);
    expect(instance.instance().props.changePage).toHaveBeenCalledWith(1);

    instance.unmount();
  });
});
