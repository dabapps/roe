#### Examples

```js
class SideBarExample extends React.Component {
  constructor () {
    this.state = {
      sideBarOpen: false
    };

    this.openSideBar = () => {
      this.setState({
        sideBarOpen: true
      });
    };

    this.closeSideBar = () => {
      this.setState({
        sideBarOpen: false
      });
    };
  }

  render () {
    const { sideBarOpen } = this.state;

    return (
      <div>
        <Button onClick={this.openSideBar}>
          Open SideBar
        </Button>

        <SideBar onClickOutside={this.closeSideBar} open={sideBarOpen}>
          <Nav>
            <NavItem active>
              <a>
                One
              </a>
            </NavItem>
            <NavItem>
              <a>
                Two
              </a>
            </NavItem>
            <NavItem>
              <a>
                Three
              </a>
            </NavItem>
            <NavItem className="button hollow primary">
              <a>
                Logout
              </a>
            </NavItem>
          </Nav>
          <Button onClick={this.closeSideBar}>
            Close SideBar
          </Button>
        </SideBar>
      </div>
    );
  }
}

<SideBarExample />
```

#### Less variables

```less
@side-bar-background: @body-background;
@side-bar-border: @border-base;
@side-bar-width: 250px;

@side-bar-z-index: 1200;
```
