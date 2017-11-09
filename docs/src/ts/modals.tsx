import * as React from 'react';

import {
  Anchor,
  Button,
  CodeBlock,
  Column,
  DabIpsum,
  Modal,
  ModalBody,
  ModalCloseIcon,
  ModalFooter,
  ModalHeader,
  ModalRenderer,
  Row,
  Section,
  SpacedGroup,
} from '../../../src/ts';

interface IState {
  modals: React.ReactNode[];
}

interface IModalAdditionalProps {
  scrollable: boolean;
  small: boolean;
  large: boolean;
  fill: boolean;
}

class Modals extends React.Component<{}, IState> {
  public constructor (props: {}) {
    super(props);

    this.state = {
      modals: []
    };

    this.onClickOpenModal = this.onClickOpenModal.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

  public render () {
    const {
      modals
    } = this.state;

    return (
      <Section>
        <Row>
          <Column>
            <h2>
              <Anchor>
                Modals
              </Anchor>
            </h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>
              Demo
            </h3>
            <ModalRenderer modals={modals} />

            <SpacedGroup>
              <Button className="primary" onClick={() => this.onClickOpenModal()}>
                Open modal
              </Button>

              <Button className="primary" onClick={() => this.onClickOpenModal({scrollable: true})}>
                Open scrollable modal
              </Button>

              <Button className="primary" onClick={() => this.onClickOpenModal({small: true})}>
                Open small modal
              </Button>

              <Button className="primary" onClick={() => this.onClickOpenModal({large: true})}>
                Open large modal
              </Button>

              <Button className="primary" onClick={() => this.onClickOpenModal({fill: true})}>
                Open fill modal
              </Button>
            </SpacedGroup>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>
              Code
            </h3>
            <p>
              Store a list of Modals that can be rendered using the ModalRenderer.
            </p>
            <p>
              Note: ModalCloseIcon should be the first element inside the ModalHeader.
            </p>
            <p>
              Give a modal the scrollable prop to limit its height to the window and allow the ModalBody to scroll.
            </p>
            <p>
              Give a modal the small prop to limit its width (ideal for alert / confirm dialogs).
            </p>
            <p>
              Give a modal the large prop so that it fills the same area as the Container on all screens.
            </p>
            <p>
              Give a modal the fill prop so that it fills the entire window.
            </p>
            <CodeBlock language="javascript" name="Opening and closing modals">
              {`
                private onClickCloseModal () {
                  const modals = [...this.state.modals];
                  modals.pop();

                  this.setState({
                    modals
                  });
                }

                private onClickOpenModal () {
                  this.setState({
                    modals: [...this.state.modals, (
                      <Modal onClickOutside={this.onClickCloseModal}>
                        <ModalHeader>
                          <ModalCloseIcon onClick={this.onClickCloseModal}>
                            X
                          </ModalCloseIcon>
                          <h5>
                            Header
                          </h5>
                        </ModalHeader>
                        <ModalBody>
                          <DabIpsum count={25} />
                        </ModalBody>
                        <ModalFooter>
                          <p>
                            <Button className="primary" onClick={this.onClickCloseModal}>
                              Close
                            </Button>
                          </p>
                        </ModalFooter>
                      </Modal>
                    )]
                  });
                }
              `}
            </CodeBlock>
            <p>
              Ideally the ModalRenderer should be in the root of your application.
            </p>
            <CodeBlock language="javascript" name="JSX">
              {`
                <ModalRenderer modals={modals} />

                <Button className="primary" onClick={this.onClickOpenModal}>
                  Open modal
                </Button>
              `}
            </CodeBlock>
          </Column>
        </Row>
      </Section>
    );
  }

  private onClickCloseModal () {
    const modals = [...this.state.modals];
    modals.pop();

    this.setState({
      modals
    });
  }

  private onClickOpenModal (props?: Partial<IModalAdditionalProps>) {
    this.setState({
      modals: [...this.state.modals, (
        <Modal {...props} onClickOutside={this.onClickCloseModal}>
          <ModalHeader>
            <ModalCloseIcon onClick={this.onClickCloseModal}>
              &times;
            </ModalCloseIcon>
            <h5>
              Header
            </h5>
          </ModalHeader>
          <ModalBody>
            <DabIpsum count={25} />
          </ModalBody>
          <ModalFooter>
            <p>
              <Button className="primary" onClick={this.onClickCloseModal}>
                Close
              </Button>
            </p>
          </ModalFooter>
        </Modal>
      )]
    });
  }
}

export default Modals;
