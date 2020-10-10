import * as React from 'react';
import { PureComponent } from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseIcon,
  ModalFooter,
  ModalHeader,
  SpacedGroup,
} from '../src/ts';

interface ExampleModalProps {
  onClickClose: () => void;
}

export default class ExampleModal extends PureComponent<ExampleModalProps> {
  public render() {
    return (
      <Modal onClickOutside={this.props.onClickClose}>
        <ModalHeader>
          <ModalCloseIcon />
          <h1>Hello</h1>
        </ModalHeader>
        <ModalBody>
          <p>I am a modal!</p>
        </ModalBody>
        <ModalFooter>
          <SpacedGroup block className="margin-vertical-large">
            <Button onClick={this.props.onClickClose}>Cancel</Button>
            <Button onClick={this.props.onClickClose} className="primary">
              Done
            </Button>
          </SpacedGroup>
        </ModalFooter>
      </Modal>
    );
  }
}
