#### Example

```js
class HighlightExample extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
    };

    this.onToggleHighlight = this.onToggleHighlight.bind(this);
  }

  onToggleHighlight () {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    const { open } = this.state;

    return (
      <Highlight
        open={open}
        backgroundColor="white"
      >
        <ContentBox className="text-align-center">
          <p>
            This content box can be highlighted.
          </p>
          <Button className="primary margin-vertical-large" onClick={this.onToggleHighlight}>
            {open ? 'Okay I\'m done' : 'Highlight it!'}
          </Button>
        </ContentBox>
      </Highlight>
    );
  }
}

<HighlightExample />
```

#### Less variables

```less
@highlight-overlay-background: @overlay-background-dark;

@highlight-z-index: 1300;
```
