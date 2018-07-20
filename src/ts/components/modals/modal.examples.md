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

  render () {
    const { modals } = this.state;

    return (
      <div>
        <Button onClick={this.onClickOpenModal}>
          Open modal example
        </Button>

        <ModalRenderer modals={modals} />
      </div>
    );
  }
}

<ModalExample />
```

#### Less variables
@modal-background: @content-box-background;
@modal-header-background: @content-box-header-background;
@modal-header-border: @content-box-header-border;

@modal-footer-background: @modal-header-background;
@modal-footer-border: @modal-header-border;

@modal-z-index: 1100;
```less

```
