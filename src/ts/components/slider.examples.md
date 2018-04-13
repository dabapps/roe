#### Examples

```js
class SliderExample extends React.Component {
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
          onSlide={(value) => console.log(value)}
          onChange={(value) => console.log(value)}
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

<SliderExample />
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
