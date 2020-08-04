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

    this.onChange = this.onChange.bind(this);
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
  }

  render () {
    return (
      <div
        className="padding-top-large"
      >
        <Row>
          <Column md={1}>
            <Row>
              <Column>
                 <Slider
                  min={0.25}
                  max={0.75}
                  popover
                  stepped
                  steps={4}
                  onSlide={this.onChange}
                  onChange={this.onChange}
                  orientation="vertical"
                />
              </Column>
            </Row>
          </Column>
          <Column md={11}>
            <Row>
              <Column
                className="margin-bottom-large"
              >
                <Slider
                  className={'custom-class'}
                  onSlide={this.onChange}
                />
              </Column>
              <Column
                className="margin-top-large margin-bottom-large"
              >
                <Slider
                  initialValue={0.3}
                  min={0.2}
                  max={0.8}
                  onSlide={this.onChange}
                />
              </Column>
              <Column
                className="margin-top-large margin-bottom-large"
              >
                <Slider
                  className="margin-top-large margin-bottom-large"
                  initialFrom={0.25}
                  initialTo={0.88}
                  onChangeFrom={this.onChangeFrom}
                  onChangeTo={this.onChangeTo}
                  popover
                  range
                />
              </Column>
              <Column
                className="margin-top-large margin-bottom-large"
              >
                <Slider
                  className="margin-top-large margin-bottom-large"
                  initialFrom={0.25}
                  initialTo={0.5}
                  min={0.125}
                  max={0.75}
                  onSlideFrom={this.onChangeFrom}
                  onChangeFrom={this.onChangeFrom}
                  onSlideTo={this.onChangeTo}
                  onChangeTo={this.onChangeTo}
                  popover
                  range
                  stepped
                  steps={8}
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </div>
    );
  }

  onChange(value) {
    this.setState({ value });
  }

  onChangeFrom(value) {
    this.setState({ from: value });
  }

  onChangeTo(value) {
    this.setState({ to: value });
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
