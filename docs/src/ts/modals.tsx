import * as React from 'react';

import {
  Button,
  CodeBlock,
  Column,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalRenderer,
  Row,
  Section
} from '../../../src/ts';

interface IState {
  modals: React.ReactNode[];
}

export class Modals extends React.Component<{}, IState> {
  public constructor (props: {}) {
    super(props);

    this.state = {
      modals: []
    };

    this.onClickOpenModal = this.onClickOpenModal.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

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
        <Modal>
          <ModalHeader>
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

  public render () {
    const {
      modals
    } = this.state;

    return (
      <Section>
        <Row>
          <Column>
            <h2>
              Modals
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
            <CodeBlock language="javascript">
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
                      <Modal>
                        <ModalHeader>
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
            <CodeBlock language="javascript">
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
}
