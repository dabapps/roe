#### Example

```js
class NavBarExample extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  render () {
    const {
      type
    } = this.state;

    return (
      <div>
        <NavBar fixed={type === 'fixed'} shy={type === 'shy'}>
          <Column>
            <SpacedGroup>
              <Button>
                Home
              </Button>
              <Button>
                About
              </Button>
              <Button>
                Contact
              </Button>
            </SpacedGroup>
          </Column>
        </NavBar>
        <FormGroup block>
          <label>
            NavBar type
          </label>
          <select onChange={this.onChange}>
            <option value="static">
              Static
            </option>
            <option value="fixed">
              Fixed
            </option>
            <option value="shy">
              Shy
            </option>
          </select>
        </FormGroup>
      </div>
    );
  }

  onChange (event) {
    this.setState({
      type: event.target.value
    });
  }
}

<NavBarExample />
```

#### Less variables

```less
@nav-bar-background: @body-background; // @white;
@nav-bar-border: @border-base;
```
