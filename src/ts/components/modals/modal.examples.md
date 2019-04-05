#### Example

ModalRenderer is required to render modals.

Place ModalRenderer in the root component of your app.

```js
const X_CHAR = String.fromCharCode(215);

class ModalExample extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modals: []
    };

    this.onClickOpenModal = this.onClickOpenModal.bind(this);
    this.onClickOpenScrollableModal = this.onClickOpenScrollableModal.bind(this);
    this.onClickOpenSmallModal = this.onClickOpenSmallModal.bind(this);
    this.onClickOpenLargeModal = this.onClickOpenLargeModal.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

  onClickCloseModal () {
    this.setState({
      modals: []
    });
  }

  onClickOpenModal () {
    this.setState({
      modals: [
        <Modal onClickOutside={this.onClickCloseModal}>
          <ModalHeader>
            <ModalCloseIcon onClick={this.onClickCloseModal}>
              {/* Replace this char with an icon */}
              {X_CHAR}
            </ModalCloseIcon>
            <h5>
              Header
            </h5>
          </ModalHeader>
          <ModalBody>
            <DabIpsum />
          </ModalBody>
          <ModalFooter>
            <SpacedGroup block className="margin-vertical-base">
              <Button onClick={this.onClickCloseModal}>
                Cancel
              </Button>
              <Button className="primary" onClick={this.onClickCloseModal}>
                Done
              </Button>
            </SpacedGroup>
          </ModalFooter>
        </Modal>
      ]
    });
  }

  onClickOpenScrollableModal () {
    this.setState({
      modals: [
        <Modal scrollable onClickOutside={this.onClickCloseModal}>
          <ModalHeader>
            <ModalCloseIcon onClick={this.onClickCloseModal}>
              {/* Replace this char with an icon */}
              {X_CHAR}
            </ModalCloseIcon>
            <h5>
              Header
            </h5>
          </ModalHeader>
          <ModalBody>
            <DabIpsum count={20} />
          </ModalBody>
          <ModalFooter>
            <SpacedGroup block className="margin-vertical-base">
              <Button onClick={this.onClickCloseModal}>
                Cancel
              </Button>
              <Button className="primary" onClick={this.onClickCloseModal}>
                Done
              </Button>
            </SpacedGroup>
          </ModalFooter>
        </Modal>
      ]
    });
  }

  onClickOpenSmallModal () {
    this.setState({
      modals: [
        <Modal small scrollable onClickOutside={this.onClickCloseModal}>
          <ModalHeader>
            <ModalCloseIcon onClick={this.onClickCloseModal}>
              {/* Replace this char with an icon */}
              {X_CHAR}
            </ModalCloseIcon>
            <h5>
              Header
            </h5>
          </ModalHeader>
          <ModalBody>
            <DabIpsum count={1} />
          </ModalBody>
          <ModalFooter>
            <SpacedGroup block className="margin-vertical-base">
              <Button onClick={this.onClickCloseModal}>
                Cancel
              </Button>
              <Button className="primary" onClick={this.onClickCloseModal}>
                Done
              </Button>
            </SpacedGroup>
          </ModalFooter>
        </Modal>
      ]
    });
  }

  onClickOpenLargeModal () {
    this.setState({
      modals: [
        <Modal large scrollable onClickOutside={this.onClickCloseModal}>
          <ModalHeader>
            <ModalCloseIcon onClick={this.onClickCloseModal}>
              {/* Replace this char with an icon */}
              {X_CHAR}
            </ModalCloseIcon>
            <h5>
              Header
            </h5>
          </ModalHeader>
          <ModalBody>
            <DabIpsum count={30} />
          </ModalBody>
          <ModalFooter>
            <SpacedGroup block className="margin-vertical-base">
              <Button onClick={this.onClickCloseModal}>
                Cancel
              </Button>
              <Button className="primary" onClick={this.onClickCloseModal}>
                Done
              </Button>
            </SpacedGroup>
          </ModalFooter>
        </Modal>
      ]
    });
  }

  render () {
    const { modals } = this.state;

    return (
      <div>
        <Button block onClick={this.onClickOpenModal}>
          Open modal example
        </Button>

        <Button block onClick={this.onClickOpenScrollableModal}>
          Open scrollable modal example
        </Button>

        <Button block onClick={this.onClickOpenSmallModal}>
          Open small modal example
        </Button>

        <Button block onClick={this.onClickOpenLargeModal}>
          Open large modal example
        </Button>

        <ModalRenderer modals={modals} />
      </div>
    );
  }
}

<ModalExample />
```

#### Less variables
```less
@modal-overlay-background: @overlay-background;
@modal-background: @content-box-background;
@modal-header-background: @content-box-header-background;
@modal-header-border: @content-box-header-border;

@modal-footer-background: @modal-header-background;
@modal-footer-border: @modal-header-border;

@modal-margin-vertical: @gutter-width / 2;
@modal-margin-horizontal: @gutter-width / 2;

@modal-z-index: 1100;
```
