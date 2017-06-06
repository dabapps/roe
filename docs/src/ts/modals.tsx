import * as React from 'react';

import {
  Anchor,
  Button,
  CodeBlock,
  Column,
  Modal,
  ModalCloseIcon,
  ModalFooter,
  ModalHeader,
  ModalRenderer,
  Row,
  Section
} from '../../../src/ts';

interface IState {
  modals: React.ReactNode[];
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

            <Button type="primary" onClick={this.onClickOpenModal}>
              Open modal
            </Button>
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
            <CodeBlock language="javascript" name="Opening and closing modals">
              {`
                public onClickCloseModal () {
                  const modals = [...this.state.modals];
                  modals.pop();

                  this.setState({
                    modals
                  });
                }

                public onClickOpenModal () {
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
                        <p>
                          Content
                        </p>
                        <ModalFooter>
                          <p>
                            <Button type="primary" onClick={this.onClickCloseModal}>
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

                <Button type="primary" onClick={this.onClickOpenModal}>
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
          <p>
            Content
          </p>
          <ModalFooter>
            <p>
              <Button type="primary" onClick={this.onClickCloseModal}>
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
