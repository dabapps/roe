#### Examples

```js
class CollapseExample extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
    };

    this.onClickToggleCollapse = this.onClickToggleCollapse.bind(this);
  }

  onClickToggleCollapse () {
    const { open } = this.state;

    this.setState({
      open: !open
    });
  }

  render () {
    const { open } = this.state;

    return (
      <div>
        <Collapse
          open={open}
          maxCollapsedHeight={100}
          fadeOut
          fadeColor="#FFF"
          fadeHeight={50}
          animationDuration={200}
        >
          <DabIpsum count={10} />
        </Collapse>
        <Button className="primary margin-top-base" onClick={this.onClickToggleCollapse}>
          {open ? 'Collapse' : 'Expand'}
        </Button>
      </div>
    );
  }
}

<CollapseExample />
```
