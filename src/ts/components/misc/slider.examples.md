#### Examples

```js
class SliderExamples extends React.Component {
  constructor(props) {
    super(props);
    this.RANGE = {
      MIN: 500,
      MAX: 700,
    };
    this.state = {
      from: 500,
      to: 700
    };
    this.STEP = 10;
    this.Input = {
      name: 'input',
      value: 0.5,
      onBlur: () => null,
      onChange: (value) => console.log('ON CHANGE', value),
      onDragStart: () => null,
      onDrop: () => null,
      onFocus: () => null,
    }
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
      <div
        className="padding-top-large"
      >
        <Row>
          <Column>
            <Slider
              onChange={this.onChange(this.Input)}
              initialValue={this.state}
              min={this.RANGE.MIN}
              max={this.RANGE.MAX}
              step={this.STEP}
            />
          </Column>
        </Row>
      </div>
    );
  }
  onChange(input) {
    return function(newValue) {
      console.log('NEW', newValue)
      input.onChange(newValue);
    }
  }
}
<SliderExamples />
```

#### Less variables

```less
@roe-slider-bar-background: @grey-lighter;
@roe-slider-bar-min-max-background: lighten(@grey-lighter, 8%);
@roe-slider-bar-thickness: 5px;
@roe-slider-handle-width: 15px;
@roe-slider-handle-height: 20px;
@roe-slider-handle-color: @primary;
@roe-slider-range-bar-background: lighten(@success, 30%);
@roe-slider-handle-z-index: 100;
```
