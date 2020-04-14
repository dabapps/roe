#### Examples

```js
class SliderExamples extends React.Component {
  constructor() {
    this.RANGE = {
      MIN: 500,
      MAX: 700,
    };
    this.INITIAL = {
      from: 500,
      to: 700
    };
    this.STEP = 10;
    this.Input = {
      name: 'input',
      value: 0,
      onBlur: () => null,
      onChange: value => console.log(value),
      onDragStart: () => null,
      onDrop: () => null,
      onFocus: () => null,
    }
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
      <Slider
        onChange={this.onChange(this.Input)}
        initialValue={this.INITIAL}
        min={this.RANGE.MIN}
        max={this.RANGE.MAX}
        step={this.STEP}
      />
    );
  }
  onChange(input) {
    return newValue => input.onChange(newValue);
  }
}
<SliderExamples />
```

#### Less variables

```less
@slider-bar-background: @grey-lighter;
@slider-bar-min-max-background: lighten(@grey-lighter, 8%);
@slider-bar-thickness: 5px;
@slider-handle-width: 15px;
@slider-handle-height: 15px;
@slider-handle-color: @primary;
@slider-range-bar-background: lighten(@success, 30%);
@slider-handle-z-index: 100;
```
