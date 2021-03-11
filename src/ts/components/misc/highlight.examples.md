#### Example

```js
const X_CHAR = String.fromCharCode(215);

const closeTextStyles = {
  position: 'absolute',
  bottom: -5,
  left: '50%',
  zIndex: 1400,
  padding: 10,
  cursor: 'pointer',
  color: '#FFFFFF',
  transform: 'translate(-50%, 100%)',
};

const closeIconStyles = {
  fontSize: 20,
  verticalAlign: 'middle',
};

class HighlightExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open1: false,
      open2: false,
    };

    this.onToggleHighlight1 = this.onToggleHighlight1.bind(this);
    this.onToggleHighlight2 = this.onToggleHighlight2.bind(this);
  }

  onToggleHighlight1() {
    this.setState({
      open1: !this.state.open1,
    });
  }

  onToggleHighlight2() {
    this.setState({
      open2: !this.state.open2,
    });
  }

  render() {
    const { open1, open2 } = this.state;

    return (
      <div>
        <Highlight open={open1} backgroundColor="white">
          <ContentBox className="text-align-center">
            <p>This content box can be highlighted.</p>
            <Button
              className="primary margin-vertical-large"
              onClick={this.onToggleHighlight1}
            >
              {open1 ? "Okay I'm done" : 'Highlight it!'}
            </Button>
          </ContentBox>
        </Highlight>
        <Highlight open={open2} disabled backgroundColor="white">
          <ContentBox className="text-align-center">
            <p>
              This content box can be highlighted, but its content will be
              disabled.
            </p>
            <Button
              className="primary margin-vertical-large"
              onClick={this.onToggleHighlight2}
            >
              {open2 ? "Okay I'm done" : 'Highlight it!'}
            </Button>
            {open2 && (
              <span onClick={this.onToggleHighlight2} style={closeTextStyles}>
                This is the only way to close it now{' '}
                <span style={closeIconStyles}>{X_CHAR}</span>
              </span>
            )}
          </ContentBox>
        </Highlight>
      </div>
    );
  }
}

<HighlightExample />;
```

#### Less variables

```css
@highlight-overlay-background: @overlay-background-dark;
@highlight-border-radius: @border-radius-base;

@highlight-z-index: 1300;
```
