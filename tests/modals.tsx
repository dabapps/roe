import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Modal, ModalCloseIcon, ModalFooter, ModalHeader, ModalRenderer } from '../src/ts/';

describe('Modal', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Modal onClickOutside={() => null}>
        <ModalCloseIcon>
          x
        </ModalCloseIcon>
        <ModalHeader>
          <h1>
            Header
          </h1>
        </ModalHeader>
        <p>
          Content
        </p>
        <ModalFooter>
          <p>
            Footer
          </p>
        </ModalFooter>
      </Modal>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Modal onClickOutside={() => null} className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});

describe('ModalCloseIcon', () => {

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <ModalCloseIcon className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});

describe('ModalHeader', () => {

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <ModalHeader className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});

describe('ModalFooter', () => {

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <ModalFooter className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

});

describe('ModalRenderer', () => {

  it('should render some modals', () => {
    const modals = [
      <Modal onClickOutside={() => null}>
        <p>
          Modal
        </p>
      </Modal>
    ];

    const tree = renderer.create(
      <ModalRenderer modals={modals} />
    );

    expect(tree).toMatchSnapshot();
  });

});
