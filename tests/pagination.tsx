import * as enzyme from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Pagination } from '../src/ts/components/pagination/pagination';

describe('Pagination', () => {
  it('should match snapshot', () => {
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

  it('should disabled buttons', () => {
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

  it('should render the first page link as an first option', () => {
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

  it('should display next and previous text', () => {
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

  it('should add extra button to cover remainder pages', () => {
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

    instance
      .find('.spaced-group.pagination-group')
      .childAt(1)
      .simulate('click');

    instance.unmount();
  });
});
