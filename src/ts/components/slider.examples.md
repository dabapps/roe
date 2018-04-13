#### Examples

```js
class SliderExamples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      from: 0,
      to: 0,
    };

    this.onSlide = this.onSlide.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSlideFrom = this.onSlideFrom.bind(this);
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onSlideTo = this.onSlideTo.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
  }

  onSlide (value) {
    this.setState({ value });
  }

  onChange (value) {
    this.setState({ value });
  }

  onSlideFrom (value) {
    this.setState({ from: value });
  }

  onChangeFrom (value) {
    this.setState({ from: value });
  }

  onSlideTo (value) {
    this.setState({ to: value });
  }

  onChangeTo (value) {
    this.setState({ to: value });
  }

  render () {
    return (
      <div
        className="padding-top-large"
      >
        <Slider
          className="margin-top-base margin-bottom-base"
          initialValue={0.25}
          initialFrom={0.25}
          initialTo={0.5}
          min={0.25}
          max={0.75}
          onSlide={(value) => this.onSlide(value)}
          onChange={(value) => this.onChange(value)}
          onSlideFrom={(from) => this.onSlideFrom(from)}
          onChangeFrom={(from) => this.onChangeFrom(from)}
          onSlideTo={(to) => this.onSlideTo(to)}
          onChangeTo={(to) => this.onChangeTo(to)}
          popover
          range
          // orientation="vertical"
          stepped
          steps={4}
        />
      </div>
    );
  }
}

<SliderExamples />
```

#### Less variables

```less
@roe-slider-vertical-default-height: 300px;
@roe-slider-bar-background: @grey-lighter;
@roe-slider-bar-min-max-background: lighten(@grey-lighter, 8%);
@roe-slider-bar-thickness: 5px;
@roe-slider-handle-thickness: 10px;
@roe-slider-handle-color: @primary;
@roe-slider-handle-range-color: @primary;
@roe-slider-handle-popover-background: @grey-light;
@roe-slider-range-bar-background: lighten(@success, 30%);
@roe-slider-point-color: @grey-lightest;
@roe-slider-steps-background: @tertiary;
@roe-slider-handle-z-index: 100;
```
